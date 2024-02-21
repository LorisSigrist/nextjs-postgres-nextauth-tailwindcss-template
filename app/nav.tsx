import Navbar from './navbar';

export default async function Nav() {
  await sleep(300);
  return <Navbar />;
}


async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}