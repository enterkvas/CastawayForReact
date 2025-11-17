import episodes1 from '@/assets/images/episodes-img/episodes1.jpg'
import episodes2 from '@/assets/images/episodes-img/episodes2.jpg'
import episodes3 from '@/assets/images/episodes-img/episodes3.jpg'

import EpisodesCard from './EpisodesCard'

const episodesData = [
  {
    id: 1,
    category: 'Gear',
    number: '1',
    title: 'The best microphone under $200',
    text: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    image: episodes1,
  },
  {
    id: 2,
    category: 'Tips & Tricks',
    number: '2',
    title: 'Mic tricks to take you to the next level',
    text: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
    image: episodes2,
  },
  {
    id: 3,
    category: 'Gear',
    number: '3',
    title: 'Should you get outboard audio gear?',
    text: 'Is hardware really worth it these days? Some people swear by it — let’s discuss.',
    image: episodes3,
  },
]

const EpisodesCardList = () => {
  return (
    <ul className="episodes__list">
      {episodesData.map((episode) => (
        <EpisodesCard key={episode.id} {...episode} />
      ))}
    </ul>
  );
};

export default EpisodesCardList;