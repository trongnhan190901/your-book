import Button from '~/components/buttons/ButtonRedirect';

const Slide3 = () => {
    return (
        <>
            <div className="mb-16 flex w-full flex-col bg-[#F3F2EC] lg:mb-24 lg:flex-row">
                <div className="absolute-center mx-auto mt-2 w-full flex-col md:mt-14 lg:mt-0 lg:mr-auto lg:w-1/2">
                    <div className=" h-full w-[70%] shadow-2xl lg:w-[60%]">
                        <img src="/images/Book3.jpg" className="mt-12 w-full" />
                    </div>
                </div>

                <div className="mx-auto mt-8 flex w-5/6 flex-col justify-center leading-snug lg:ml-auto lg:w-1/2">
                    <h1 className="font-title text-7xl lg:text-8xl">
                        Chuyện con mèo dạy hải âu bay
                    </h1>
                    <br />
                    <span className="w-full text-justify font-secondary text-3xl font-light leading-normal ">
                        ₫ 99.000
                    </span>
                    <span className="w-full text-justify font-primary text-3xl leading-normal lg:w-[600px] 2xl:w-[700px]">
                        Cô hải âu Kengah bị nhấn chìm trong váng dầu – thứ chất
                        thải nguy hiểm mà những con người xấu xa bí mật đổ ra
                        đại dương. Với nỗ lực đầy tuyệt vọng, cô bay vào bến
                        cảng Hamburg và rơi xuống ban công của con mèo mun, to
                        đùng, mập ú Zorba. Trong phút cuối cuộc đời, cô sinh ra
                        một quả trứng và con mèo mun hứa với cô sẽ thực hiện ba
                        lời hứa chừng như không tưởng với loài mèo.
                    </span>
                    <div className="absolute-center mt-8 w-full lg:w-[600px] 2xl:w-[700px]">
                        <Button href="#" title="Đặt hàng" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide3;
