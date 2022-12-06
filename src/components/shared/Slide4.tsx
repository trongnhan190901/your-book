import Button from '~/components/buttons/ButtonRedirect';

const Slide4 = () => {
    return (
        <>
            <div className="mb-16 flex w-full flex-col bg-[#F3F2EC] lg:mb-24 lg:flex-row">
                <div className="absolute-center mx-auto mt-2 w-full flex-col md:mt-14 lg:mt-0 lg:mr-auto lg:w-1/2">
                    <div className="h-full w-[70%] shadow-2xl lg:w-[60%]">
                        <img src="/images/Book4.jpg" className="mt-12 w-full" />
                    </div>
                </div>

                <div className="mx-auto mt-8 flex w-5/6 flex-col justify-center leading-snug lg:ml-auto lg:w-1/2">
                    <h1 className="font-title text-7xl lg:text-8xl">
                        Tạm biệt tôi của nhiều năm về trước
                    </h1>
                    <br />
                    <span className="w-full text-justify font-secondary text-3xl font-light leading-normal ">
                        ₫ 99.000
                    </span>
                    <span className="w-full text-justify font-primary text-3xl leading-normal lg:w-[600px] 2xl:w-[700px]">
                        Dành tặng bạn, những người muốn buông bỏ những “điều đã
                        cũ” nhưng chưa đủ can đảm.
                        <br />
                        Dành tặng những ai đang khao khát được “chạm vào”, được
                        vỗ về và thấu hiểu. Dành tặng cho tất cả chúng ta, trong
                        những năm tháng tươi đẹp nhất của thanh xuân, đang có
                        một chốn để mơ về, có một ước mơ để theo đuổi và có một
                        ai đó để da diết nhớ thương.
                    </span>
                    <div className="absolute-center w-full pt-8 lg:w-[600px] 2xl:w-[700px]">
                        <Button href="#" title="Đặt hàng" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide4;
