import ButtonRedirect from '../buttons/ButtonRedirect';

const Slide1 = () => {
    return (
        <>
            <div className="mb-16 flex w-full flex-col bg-[#F3F2EC] lg:mb-24 lg:flex-row">
                <div className="absolute-center mx-auto mt-2 w-full flex-col md:mt-14 lg:mt-0 lg:mr-auto lg:w-1/2">
                    <div className=" h-full w-[70%] shadow-2xl lg:w-[60%]">
                        <img src="/images/Book1.jpg" className="mt-12 w-full" />
                    </div>
                </div>

                <div className="mx-auto mt-8 flex w-5/6 flex-col justify-center leading-snug lg:ml-auto lg:w-1/2">
                    <h1 className="font-title text-7xl lg:text-8xl">
                        Tôi thích bản thân nỗ lực hơn
                    </h1>
                    <br />
                    <div className="text-justify font-secondary text-3xl font-light leading-normal ">
                        ₫ 99.000
                    </div>
                    <div className="h-fit text-justify font-primary text-3xl leading-normal lg:w-[600px] 2xl:w-[700px]">
                        Tôi vẫn luôn tin rằng con người mới là Đấng Cứu Thế của
                        mình. Khi gặp khó khăn hay bế tắc, cầu xin thế lực bên
                        ngoài giúp đỡ, dù là số mạng hay thần linh cũng thế,
                        cũng chỉ vô ích và nực cười mà thôi. Người có thể tạo ra
                        sự thay đổi không phải ai khác mà là chính bạn. Bạn chỉ
                        cần cúi xuống nói với sự yếu đuối của chính mình: “Đứng
                        dậy đi!” Khi bạn đứng dậy rồi sẽ thấy được đường đi.”
                    </div>
                    <div className="absolute-center w-full pt-8 lg:w-[600px] 2xl:w-[700px]">
                        <ButtonRedirect href="#" title="Đặt hàng" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide1;
