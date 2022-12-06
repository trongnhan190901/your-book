import Button from '~/components/buttons/ButtonRedirect';

const Slide2 = () => {
    return (
        <>
            <div className="mb-16 flex w-full flex-col bg-[#F3F2EC] lg:mb-24 lg:flex-row">
                <div className="absolute-center mx-auto mt-2 w-full flex-col md:mt-14 lg:mt-0 lg:mr-auto lg:w-1/2">
                    <div className=" h-full w-[70%] shadow-2xl lg:w-[60%]">
                        <img src="/images/Book2.jpg" className="mt-12 w-full" />
                    </div>
                </div>

                <div className="mx-auto mt-8 flex w-5/6 flex-col justify-center leading-snug lg:ml-auto lg:w-1/2">
                    <h1 className="font-title text-7xl lg:text-8xl">
                        Bước chậm lại giữa thế gian vội vã
                    </h1>
                    <br />
                    <span className="w-full text-justify font-secondary text-3xl font-light leading-normal ">
                        ₫ 99.000
                    </span>
                    <span className="w-full text-justify font-primary text-3xl leading-normal lg:w-[600px] 2xl:w-[700px]">
                        Chen vai thích cánh để có một chỗ bám trên xe buýt giờ
                        đi làm, nhích từng xentimét bánh xe trên đường lúc tan
                        sở, quay cuồng với thi cử và tiến độ công việc, lu bù
                        vướng mắc trong những mối quan hệ cả thân lẫn sơ… bạn có
                        luôn cảm thấy thế gian xung quanh mình đang xoay chuyển
                        quá vội vàng?
                        <br />
                        Nếu có thể, hãy tạm dừng một bước.
                    </span>
                    <div className="absolute-center w-full pt-8 lg:w-[600px] 2xl:w-[700px]">
                        <Button href="#" title="Đặt hàng" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide2;
