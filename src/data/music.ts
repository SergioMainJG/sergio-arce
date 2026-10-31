import type { Media } from '~interfaces/media';
import cocteautwins from '~assets/images/music/cocteautwins.avif';
import dogstar from '~assets/images/music/dogstar.avif';
import franksinatra from '~assets/images/music/franksinatra.avif';
import luismiguel from '~assets/images/music/luismiguel.avif';
import mrkitty from '~assets/images/music/mrkitty.avif';
import pavarotti from '~assets/images/music/pavarotti.avif';

export const bands: Media[] = [
  {
    title: 'Cocteau Twins',
    description: {
      es: " Pioneros del género 'Dream Pop'. Elizabeth Fraser destacó la banda por su voz, la cuál es capaz de adaptarse a diferentes géneros, tonos, o incluso sonar diferente en la misma cancións",
      en: "Pioneers of the 'Dream Pop' genre. Elizabeth Fraser made the band stand out with her voice, which can adapt to different genres and tones, or even sound different within the same song",
    },
    src: cocteautwins,
    alt: 'Coctea Twins - Elizabeth Fraser',
    link: 'https://music.youtube.com/watch?v=_YH5E59ZeUU&si=GcMSUts7ZX6UXJYT',
  },
  {
    title: 'Dogstar',
    description: {
      es: "Banda de rock alternativo, formada por el 94'. Es conocido por la excelente participación de Robert Mailhouse, Bret Domrose, y Keanu Reeves",
      en: "Alternative rock band formed in '94. Known for the excellent performances of Robert Mailhouse, Bret Domrose, and Keanu Reeves",
    },
    src: dogstar,
    alt: 'Dogstar - Robert, Keanu, Bret',
    link: 'https://music.youtube.com/watch?v=CmjhETYr3Go&si=TbdWFMlb-jLMwB15',
  },
  {
    title: 'Frank Sinatra',
    description: {
      es: 'Baritono popular, interpretaba música pop. Bastante conocido por su actuaciones poderosas y energicas como en "My Way of Life"',
      en: 'Popular baritone who performed pop music. Well known for his powerful and energetic performances, such as in "My Way of Life"',
    },
    src: franksinatra,
    alt: 'Frank Sinatra',
    link: 'https://music.youtube.com/watch?v=X3r7GD0R56s&si=Hmf5oDIvk73Xz-6z',
  },
  {
    title: 'Luis Miguel',
    description: {
      es: 'Cantante mexicano conocido mundialmente por su excelente voz, siendo capaz de adaptarse a cualquier género',
      en: 'Mexican singer known worldwide for his excellent voice, able to adapt to any genre',
    },
    src: luismiguel,
    alt: 'Luis Miguel',
    link: 'https://music.youtube.com/watch?v=FhYdaodY_5I&si=J4799euSKC0tTWOc',
  },
  {
    title: 'Mr. Kitty',
    description: {
      es: 'El más famoso autor del género Synthwave y Darkwave. Música popular en EUA y Europa, conocido especialmente por After Dark',
      en: 'The most famous artist of the Synthwave and Darkwave genres. Popular in the US and Europe, especially known for After Dark',
    },
    src: mrkitty,
    alt: 'Mr Kitty',
    link: 'https://music.youtube.com/watch?v=Cl5Vkd4N03Q&si=2GTL109ExXHku_Ip',
  },
  {
    title: 'Luciano Pavarotti',
    description: {
      es: 'Uno de los cantantes de opera más famosos del siglo XX. "Pienso que una vida dedicada a la música es una vida bellamente empleada, y es a eso a lo que he dedicado la mía"',
      en: 'One of the most famous opera singers of the 20th century. "I think a life in music is a life beautifully spent, and this is what I have devoted my life to"',
    },
    src: pavarotti,
    alt: 'Luciano Pavarotti',
    link: 'https://music.youtube.com/watch?v=S8hQFu3-c8s&si=4PPUWSm2sNKvRM5i',
  },
];
