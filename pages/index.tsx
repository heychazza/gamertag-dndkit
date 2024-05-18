import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

// DnD
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {FigmaCard, GithubCard, SteamCard, TwitterCard} from "@/components/SocialBlocks";

// Helper functions
const arrayMove = (array, from, to) => {
  const newArray = array.slice();
  const [movedItem] = newArray.splice(from, 1);
  newArray.splice(to, 0, movedItem);
  return newArray;
};

// Modal Component
function Modal({ showModal, setShowModal, children }) {
  if (!showModal) return null;
  return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowModal(false)}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
  );
}

// Input Component
function Input({ type, placeholder, name, value, onChange }) {
  return (
      <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded p-2"
      />
  );
}

// Button Component
function Button({ children, onClick, type = 'button' }) {
  return (
      <button
          type={type}
          onClick={onClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {children}
      </button>
  );
}

// Block Component
function Block({ id, type, username }) {
  return (
      <motion.div
          layout
          className="border p-4 rounded-lg bg-gray-100 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-xl font-bold">{type}</h3>
        <p>{username}</p>
      </motion.div>
  );
}

// SortableItem Component
function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {props.children}
      </div>
  );
}

export default function Gamertag() {
  const [blocks, setBlocks] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [showAddBlockModal, setShowAddBlockModal] = useState(false);
  const [blockType, setBlockType] = useState('Twitter');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedBlocks = JSON.parse(localStorage.getItem('blocks') || '[]');
    if (savedBlocks.length > 0) {
      setBlocks(savedBlocks);
    }
  }, []);

  useEffect(() => {
    if (blocks.length > 0) {
      localStorage.setItem('blocks', JSON.stringify(blocks));
    }
  }, [blocks]);


  const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
  );

  const handleAddBlock = () => {
    if (!username) return;
    const newBlock = {
      id: uuidv4(),
      type: blockType,
      username,
    };
    setBlocks((prev) => [...prev, newBlock]);
    setUsername('');
    setShowAddBlockModal(false);
  };

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) {
      setActiveId(null);
      return;
    }

    const oldIndex = blocks.findIndex((block) => block.id === active.id);
    const newIndex = blocks.findIndex((block) => block.id === over.id);
    setBlocks((prev) => arrayMove(prev, oldIndex, newIndex));

    setActiveId(null);
  };

  const getBlockStyle = (id) => {
    return activeId === id ? { opacity: 0.5 } : { opacity: 1 };
  };

  const renderBlock = (block) => {
    switch (block.type) {
      case 'Twitter':
        return <TwitterCard username={block.username} />;
      case 'Figma':
        return <FigmaCard username={block.username} />;
      case 'Github':
        return <GithubCard username={block.username} />;
      case 'Steam':
        return <SteamCard username={block.username} />;
      default:
        return null;
    }
  };

  return (
      <div className="mx-auto max-w-4xl py-10">
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <img
                className="w-24 h-24 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Avatar"
            />
            <div>
              <h1 className="text-4xl font-bold">Gamertag</h1>
              <p className="text-lg">Gamer extraordinaire. Conqueror of worlds.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blocks</h2>
            <Button onClick={() => setShowAddBlockModal(true)}>Add Block</Button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
              <SortableContext items={blocks.map((i) => i.id)}>
                {blocks.map((block) => (
                    <SortableItem key={block.id} id={block.id}>
                      {renderBlock(block)}
                    </SortableItem>
                ))}
              </SortableContext>
              <DragOverlay>
                {activeId ? (
                    <div className="h-full">
                      {renderBlock(blocks.find((block) => block.id === activeId))}
                    </div>
                ) : null}
              </DragOverlay>
            </DndContext>
          </div>
        </div>

        <Modal showModal={showAddBlockModal} setShowModal={setShowAddBlockModal}>
          <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddBlock();
              }}
              className="flex flex-col w-full items-start gap-y-4"
          >
            <h1 className="text-gray-800 text-3xl font-bold">Add Block</h1>
            <label className="w-full">
              <span>Block Type</span>
              <select
                  className="mt-1 w-full border rounded p-2"
                  value={blockType}
                  onChange={(e) => setBlockType(e.target.value)}
              >
                <option value="Twitter">Twitter</option>
                <option value="Figma">Figma</option>
                <option value="Github">Github</option>
                <option value="Steam">Steam</option>
              </select>
            </label>
            <Input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit">Add Block</Button>
          </form>
        </Modal>
      </div>
  );
}