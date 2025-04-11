import { TabGroup, Tab, TabPanel } from './TabGroup/page';

export default function Home() {
  return (
    <div>
      <h1>Programming Memes</h1>
      <TabGroup>
        <div>
          <Tab index={0}>Meme 1</Tab>
          <Tab index={1}>Meme 2</Tab>
          <Tab index={2}>Meme 3</Tab>
        </div>
        <TabPanel index={0}><img src="/images/meme1.jpeg" alt="Meme 1" style={{ maxWidth: '100%' }}/> </TabPanel>
        <TabPanel index={1}><img src="/images/meme2.jpeg" alt="Meme 2" style={{ maxWidth: '100%' }}/> </TabPanel>
        <TabPanel index={2}><img src="/images/meme3.jpeg" alt="Meme 3" style={{ maxWidth: '100%' }}/> </TabPanel>
      </TabGroup>
    </div>
  );
}
