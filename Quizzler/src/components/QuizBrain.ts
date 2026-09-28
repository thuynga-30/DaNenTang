export interface Question {
  text: string;
  answer: boolean;
}

export const questions: Question[] = [
  { text: 'React Native cho phép viết code chạy trên cả Android và iOS.', answer: true },
  { text: 'useState là hook dùng để gọi API.', answer: false },
  { text: 'JSX là cú pháp kết hợp giữa JavaScript và XML.', answer: true },
  { text: 'TouchableOpacity chỉ dùng được cho hình ảnh, không dùng cho Text.', answer: false },
  { text: 'Expo giúp chạy thử app mà không cần build native.', answer: true },
];