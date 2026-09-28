export interface StoryNode {
  id: number;
  text: string;
  choice1: string;
  choice2: string;
  next1: number;
  next2: number;
  isEnding?: boolean;
  isWin?: boolean; 
  image: any; 
}

export const storyNodes: StoryNode[] = [
  {
    id: 0,
    text: 'Bạn thức dậy trong một khu rừng lạ, không nhớ gì về đêm qua. Trước mặt có hai con đường.',
    choice1: 'Đi theo con đường bên trái, dẫn vào rừng rậm',
    choice2: 'Đi theo con đường bên phải, dẫn ra một ngôi làng',
    next1: 1,
    next2: 2,
    image: require('../images/forest-crossroad.jpg'),
  },
  {
    id: 1,
    text: 'Bạn đi sâu vào rừng và gặp một con sói đang bị thương, nhìn bạn cầu cứu.',
    choice1: 'Giúp đỡ con sói',
    choice2: 'Bỏ đi, tiếp tục hành trình',
    next1: 3,
    next2: 4,
    image: require('../images/wolf.jpg'),
  },
  {
    id: 2,
    text: 'Bạn đến một ngôi làng nhỏ, dân làng đang hoảng loạn vì mất nước sạch.',
    choice1: 'Giúp dân làng tìm nguồn nước',
    choice2: 'Rời đi vì không muốn dính vào rắc rối',
    next1: 5,
    next2: 6,
    image: require('../images/village.jpg'),
  },
  {
    id: 3,
    text: 'Con sói trở thành bạn đồng hành trung thành, dẫn bạn tới kho báu bí mật trong rừng. BẠN THẮNG!',
    choice1: '',
    choice2: '',
    next1: -1,
    next2: -1,
    isEnding: true,
    isWin: true,
    image: require('../images/treasure.jpg'),
  },
  {
    id: 4,
    text: 'Bạn bỏ đi và lạc trong rừng mãi mãi, không bao giờ tìm được đường ra. GAME OVER.',
    choice1: '',
    choice2: '',
    next1: -1,
    next2: -1,
    isEnding: true,
    isWin: false,
    image: require('../images/lost-forest.jpg'),
  },
  {
    id: 5,
    text: 'Bạn tìm ra nguồn nước bị chặn bởi đá lở, khơi thông thành công. Dân làng tôn bạn làm anh hùng! BẠN THẮNG!',
    choice1: '',
    choice2: '',
    next1: -1,
    next2: -1,
    isEnding: true,
    isWin: true,
    image: require('../images/hero.jpg'),
  },
  {
    id: 6,
    text: 'Bạn rời làng, nhưng bị lạc đường trong đêm tối và không bao giờ tìm được lối về. GAME OVER.',
    choice1: '',
    choice2: '',
    next1: -1,
    next2: -1,
    isEnding: true,
    isWin: false,
    image: require('../images/dark-night.jpg'),
  },
];