import dynamic from "next/dynamic";

// This file is now a server component wrapper. The interactive parts
// (state, effects, navigation hooks, context) are kept in a client
// component `header.client.tsx` to preserve behavior.

const HeaderClient = dynamic(() => import("./header.client"), { ssr: false });

export default function Header() {
  return <HeaderClient />;
}
