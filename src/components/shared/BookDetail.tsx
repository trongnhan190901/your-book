import ButtonRedirect from '../buttons/ButtonRedirect';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import SimilarBook from './SimilarBook';

const BookDetail = () => {
    return (
        <>
            <div className="h-[200rem] min-h-screen w-[90%] bg-slate-300 lg:w-[70%]">
                <div className="mx-auto mt-24 flex flex-col bg-white lg:flex-row">
                    <div className="flex h-fit w-full flex-col lg:mr-auto lg:w-1/2">
                        <div className="h-fit w-full">
                            <img
                                src="/images/FB1.jpg"
                                alt=""
                                className="my-6 mx-auto h-full w-3/4 lg:my-16"
                            />
                        </div>
                    </div>
                    <div className="my-12 mx-6 w-[95%] lg:ml-auto lg:w-1/2">
                        <h3 className="my-4 font-primary text-5xl font-semibold">
                            Một thoáng ta rực rỡ ở nhân gian
                        </h3>
                        <div className="mb-2 font-primary text-3xl text-gray-600">
                            Tác giá: Ocean Vuong
                        </div>
                        <div className="font-primary text-3xl text-gray-600">
                            Đã bán: 5000+
                        </div>
                        <div className="my-16 font-secondary text-6xl">
                            ₫ 99.000
                        </div>
                        <div className="mb-3 font-secondary text-3xl font-medium">
                            Số lượng
                        </div>
                        <div className="mb-12 flex h-12">
                            <button className="w-12 rounded-l-md border-r-[2px] border-gray-100 bg-white">
                                <MinusSmallIcon className="mx-auto w-8" />
                            </button>
                            <input
                                type="text"
                                min={1}
                                max={99}
                                value={1}
                                className="w-16 text-center font-primary text-[1.6rem] outline-0"
                            />
                            <button className="w-12 rounded-r-md border-l-[2px] border-gray-100 bg-white">
                                <PlusSmallIcon className="mx-auto w-8" />
                            </button>
                        </div>
                        <div>
                            <ButtonRedirect title="Chọn mua" href="#" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-row">
                    <SimilarBook />
                </div>

                <div className="mt-8 flex h-fit w-full flex-col bg-indigo-300 pb-16">
                    <h2 className="m-4 ml-12 font-secondary text-4xl font-semibold lg:ml-20">
                        Thồng tin sản phẩm
                    </h2>
                    <div className="text-2xl">
                        <table className="mx-8 table-auto font-primary lg:mx-12">
                            <tbody className="mx-4 leading-tight">
                                <tr>
                                    <td className="h-14 w-[18rem]">Tác giả</td>
                                    <td>ABASDASD</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">Danh mục</td>
                                    <td>ABASDASD</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">
                                        Nhà xuất bản
                                    </td>
                                    <td>ABASDASD</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">
                                        Số lượng hàng sẵn
                                    </td>
                                    <td>919</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="my-4 ml-12 font-secondary text-4xl lg:ml-20">
                            Mô tả sản phẩm
                        </div>
                        <div className="mx-6 font-primary text-2xl leading-normal lg:mx-12">
                            “YÊU” TRONG TỈNH THỨC VỚI OSHO Một chỉ dẫn “yêu
                            không sợ hãi” đầy ngạc nhiên từ bậc thầy tâm linh
                            Osho Những người đói khát trong nhu cầu, những người
                            luôn kỳ vọng ở tình yêu chính là những người đau khổ
                            nhất. Hai kẻ đói khát tìm thấy nhau trong một mối
                            quan hệ yêu đương cùng những kỳ vọng người kia sẽ
                            mang đến cho mình thứ mình cần – về cơ bản sẽ nhanh
                            chóng thất vọng về nhau và cùng mang đến ngục tù khổ
                            đau cho nhau. Trong cuốn sách Yêu, Osho - bậc thầy
                            tâm linh, người được tôn vinh là một trong 1000
                            người kiến tạo của thế kỷ 20 – đã đưa ra những kiến
                            giải sâu sắc về nhu cầu tâm lý có sức mạnh lớn nhất
                            của nhân loại và “chỉ cho chúng ta cách trải nghiệm
                            tình yêu”. Thông qua từng chương của cuốn sách, bạn
                            đọc nhận diện những dấu hiệu của một tình yêu đích
                            thực: Sự cho đi và không chờ đợi được nhận lại, sự
                            trưởng thành cá nhân, đặc biệt là sự tỉnh thức khi
                            yêu. “Việc tỉnh táo nhận biết về bản thể của mình là
                            sự khởi đầu của hành trình hướng tới tình yêu”.
                            Trong phần trọng tâm của cuốn sách “Tình yêu là cơn
                            gió mát lành” - Osho dành nhiều thời lượng bàn về
                            những chỉ dẫn yêu đương, tinh tế, thấu cảm, hài hước
                            và nhiệt tình chẳng kém gì một nhà tư vấn tâm lý
                            hiện đại tài ba nhất. Ông hoá giải những trải nghiệm
                            tệ hại mà ta gặp phải khi yêu: Sự hụt hẫng sau những
                            phấn khích ban đầu hay thất vọng về tình dục. Hiếm
                            có một bậc thầy tâm linh nào lại mang ánh sáng của
                            thiền và đạo vào vấn đề tình dục, khoái cảm như Osho
                            và ông đã kiến giải vấn đề này vô cùng uyên bác,
                            thấu đáo và có tính giáo dục cao hơn bất cứ cuốn
                            sách giáo dục giới tính nào trong vấn đề tình dục
                            từng có. Osho cũng thẳng thừng gạt phăng những hiểu
                            lầm, những “ý nghĩ vô nghĩa” về tình yêu như tư
                            tưởng “yêu là đau khổ” hay phụ nữ không nên là người
                            chủ động khi yêu. Sau cùng, Osho đưa ra những “niềm
                            tin mới”, cổ vũ bạn đọc dấn thân vào tình yêu đích
                            thực, thứ tình yêu của những linh hồn trưởng thành
                            để đem đến sự hạnh phúc, khai sáng và chữa lành cho
                            tất cả. Osho cũng đưa ra nhiều lời khuyên đáng giá
                            cho các cặp đôi đang yêu.
                        </div>
                        <div className="mx-6 mt-8 text-2xl">
                            Giá sản phẩm trên YourBook đã bao gồm thuế theo luật
                            hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình
                            thức và địa chỉ giao hàng mà có thể phát sinh thêm
                            chi phí khác như Phụ phí đóng gói, phí vận chuyển,
                            phụ phí hàng cồng kềnh,...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BookDetail;
