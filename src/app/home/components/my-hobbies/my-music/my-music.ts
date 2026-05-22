import { Component } from '@angular/core';

interface BandsProps {
  title: string;
  description: string;
  src: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'my-music',
  imports: [],
  templateUrl: './my-music.html',
})
export class MyMusic {
  bands: BandsProps[] = [
    {
      title: 'Cocteau Twins',
      description:
        " Pioneros del género 'Dream Pop'. Elizabeth Fraser destacó la banda por su voz, la cuál es capaz de adaptarse a diferentes géneros, tonos, o incluso sonar diferente en la misma cancións",
      src: '/assets/images/cocteautwins.avif',
      alt: 'Coctea Twins - Elizabeth Fraser',
      link: 'https://music.youtube.com/watch?v=_YH5E59ZeUU&si=GcMSUts7ZX6UXJYT',
    },
    {
      title: 'Dogstar',
      description:
        "Banda de rock alternativo, formada por el 94'. Es conocido por la excelente participación de Robert Mailhouse, Bret Domrose, y Keanu Reeves",
      src: '/assets/images/dogstar.avif',
      alt: 'Dogstar - Robert, Keanu, Bret',
      link: 'https://music.youtube.com/watch?v=CmjhETYr3Go&si=TbdWFMlb-jLMwB15',
    },
    {
      title: 'Frank Sinatra',
      description:
        'Baritono popular, interpretaba música pop. Bastante conocido por su actuaciones poderosas y energicas como en "My Way of Life"',
      src: '/assets/images/franksinatra.avif',
      alt: 'Frank Sinatra',
      link: 'https://music.youtube.com/watch?v=X3r7GD0R56s&si=Hmf5oDIvk73Xz-6z',
    },
    {
      title: 'Luis Miguel',
      description:
        'Cantante mexicano conocido mundialmente por su excelente voz, siendo capaz de adaptarse a cualquier género',
      src: '/assets/images/luismiguel.avif',
      alt: 'Luis Miguel',
      link: 'https://music.youtube.com/watch?v=FhYdaodY_5I&si=J4799euSKC0tTWOc',
    },
    {
      title: 'Mr. Kitty',
      description:
        'El más famoso autor del género Synthwave y Darkwave. Música popular en EUA y Europa, conocido especialmente por After Dark',
      src: '/assets/images/mrkitty.avif',
      alt: 'Mr Kitty',
      link: 'https://music.youtube.com/watch?v=Cl5Vkd4N03Q&si=2GTL109ExXHku_Ip',
    },
    {
      title: 'Luciano Pavarotti',
      description:
        'Uno de los cantantes de opera más famosos del siglo XX. "Pienso que una vida dedicada a la música es una vida bellamente empleada, y es a eso a lo que he dedicado la mía"',
      src: '/assets/images/pavarotti.avif',
      alt: 'Luciano Pavarotti',
      link: 'https://music.youtube.com/watch?v=S8hQFu3-c8s&si=4PPUWSm2sNKvRM5i',
    },
  ];
}
