import { twMerge } from "tailwind-merge";
import {FigmaIcon, GitHubIcon, SteamIcon, XIcon} from "@/components/SocialIcons";

function Card({ className = null, children }) {
  return (
    <div
      className={twMerge(
        "rounded-lg border shadow-sm text-white h-[200px]",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">{children}</div>
    </div>
  );
}

function PrimaryBtn({ className, children }) {
  return (
    <button className={twMerge("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-4 bg-white text-[#1DA1F2]", className)}>
        {children}
    </button>
  );
}

function TwitterCard({ username }) {
  return (
    <Card className="bg-[#1DA1F2]">
      <XIcon className="h-8 w-8 text-center text-white fill-current" />
      <div className="mt-2 text-center">
        <div>Twitter</div>
        <div className="text-sm">@{username}</div>
      </div>
        <PrimaryBtn>Follow 2.1K</PrimaryBtn>
    </Card>
  );
}

function InstagramCard() {
  return (
    <Card className="bg-[#E1306C] h-full">
        <XIcon className="h-8 w-8 text-center text-white fill-current" />
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 bg-white text-[#E1306C]">
        Follow
      </button>
    </Card>
  );
}

function LinkedInCard() {
  return (
    <Card className="bg-[#0077B5] h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      <div className="mt-2">linkedin.com</div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 bg-white text-[#0077B5]">
        Follow
      </button>
    </Card>
  );
}

function GithubCard({ username }) {
  return (
      <Card className="bg-black">
          <GitHubIcon className="h-8 w-8 text-center text-white fill-current" />
          <div className="mt-2 text-center">
              <div>GitHub</div>
              <div className="text-sm">@{username}</div>
          </div>
          <PrimaryBtn className="text-black">Follow 2.1K</PrimaryBtn>
      </Card>
  );
}

function YouTubeCard({ username }) {
  return (
    <Card className="bg-[#FF0000] h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
      <div className="mt-2">{username}</div>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 bg-white text-[#FF0000]">
        Subscribe 25
      </button>
    </Card>
  );
}

function SteamCard({ username }) {
  return (
      <Card className="bg-[#171A21]">
          <SteamIcon className="h-8 w-8 text-center text-white fill-current" />
          <div className="mt-2 text-center">
              <div>Steam</div>
              <div className="text-sm">@{username}</div>
          </div>
          <PrimaryBtn className="text-black">Follow</PrimaryBtn>
      </Card>
  );
}

function RedditCard() {
  return (
    <Card className="bg-[#FF4500] h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
      <div className="mt-2">reddit.com</div>
    </Card>
  );
}

function TwitchCard() {
  return (
    <Card className="bg-[#6441A4] h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>
      <div className="mt-2">twitch.tv</div>
    </Card>
  );
}

function DribbbleCard() {
  return (
    <Card className="bg-[#EA4C89] h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
      </svg>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-6 bg-white text-[#EA4C89]">
        Follow
      </button>
    </Card>
  );
}

function FigmaCard({ username }) {
  return (
      <Card className="bg-[#0ACF83]">
          <FigmaIcon className="h-8 w-8 text-center text-white fill-current" />
          <div className="mt-2 text-center">
              <div>Figma</div>
              <div className="text-sm">@{username}</div>
          </div>
          <PrimaryBtn className="text-[#0ACF83]">Follow</PrimaryBtn>
      </Card>
  );
}

export {
  TwitterCard,
  InstagramCard,
  LinkedInCard,
  GithubCard,
  YouTubeCard,
  SteamCard,
  RedditCard,
  TwitchCard,
  DribbbleCard,
  FigmaCard,
};
