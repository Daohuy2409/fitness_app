interface PostInterface {
  id: number;
  title: string;
  description: string;
  content: string;
}
interface DataInterface {
  id: number;
  name: string;
  address: string;
  location: number[];
  follow: number;
  coverPhotoUrl: any;
  avatarUrl: any;
  post: PostInterface[];
}
export const data: DataInterface[] = [
  {
    id: 1,
    name: "California Gym",
    address: "69 Nguyen Van Huyen, Cau Giay,Thanh pho Ha Noi",
    location: [21.036985, 105.782062],
    follow: 123456,
    coverPhotoUrl: require("./images/anh1.jpg"),
    avatarUrl: require("./images/gym1.png"),
    post: [
      {
        id: 1,
        title: "Giảm giá 100% cho người đăng ký lần đầu",
        description: "Ưu đãi lớn cho ngày khai trương",
        content: "l;afkjdladjkflasdjfklsdjflajdfkklsajdaljaldsjfaldn",
      },
    ],
  },
  {
    id: 2,
    name: "hehe Gym",
    address: "69 Nguyen Van Huyen",
    location: [124.564, 236.564],
    follow: 4585,
    coverPhotoUrl: require("./images/anh2.jpg"),
    avatarUrl: require("./images/gym2.png"),
    post: [
      {
        id: 1,
        title: "Giảm giá 100% cho người đăng ký lần đầu",
        description: "Ưu đãi lớn cho ngày khai trương",
        content: "l;afkjdladjkflasdjfklsdjflajdfkklsajdaljaldsjfaldn",
      },
    ],
  },
  {
    id: 3,
    name: "abskclx Gym",
    address: "69 Nguyen Van Huyen",
    location: [130.564, 236.564],
    follow: 565,
    coverPhotoUrl: require("./images/anh2.jpg"),
    avatarUrl: require("./images/gym3.png"),
    post: [
      {
        id: 1,
        title: "Giảm giá 100% cho người đăng ký lần đầu",
        description: "Ưu đãi lớn cho ngày khai trương",
        content: "l;afkjdladjkflasdjfklsdjflajdfkklsajdaljaldsjfaldn",
      },
    ],
  },
];
