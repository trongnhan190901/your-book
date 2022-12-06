import { NextPage } from 'next';
import { useState } from 'react';

const Admin: NextPage = () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [publishing, setPublishing] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [des, setDes] = useState('');
    const [stock, setStock] = useState('');

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        }
    };

    return (
        <>
            <div className="mt-28 flex h-fit min-h-screen w-full flex-col bg-[#F3F2EC] lg:flex-row">
                <div className="mx-auto w-[90%] lg:ml-auto  lg:w-1/2">
                    <div className="mx-auto w-full lg:w-4/5">
                        <h1 className="absolute-center pt-24 font-tertiary text-6xl">
                            Add Products
                        </h1>
                        <div className="absolute-center mt-24 w-full flex-col font-primary text-3xl">
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Tên sản phẩm
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên sản phẩm"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) => setName(event.currentTarget.value)}
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Tác giả
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên tác giả"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) => setAuthor(event.currentTarget.value)}
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Nhà xuất bản
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên nhà xuất bản"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) =>
                                        setPublishing(event.currentTarget.value)
                                    }
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Hình ảnh
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                    onChange={imageChange}
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Giá sản phẩm
                                </label>
                                <input
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) => setPrice(event.currentTarget.value)}
                                    type="text"
                                    placeholder="Nhập giá sản phẩm"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Danh mục của sản phẩm (Thể loại)
                                </label>
                                <input
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) => setCategory(event.currentTarget.value)}
                                    type="text"
                                    placeholder="Nhập danh mục của sản phẩm"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Mô tả
                                </label>
                                <textarea
                                    onChange={(
                                        event: React.FormEvent<HTMLTextAreaElement>,
                                    ) => setDes(event.currentTarget.value)}
                                    placeholder="Nhập mô tả sản phẩm"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                />
                            </div>
                            <div className="my-6">
                                <label htmlFor="" className="mb-12 h-40 w-full">
                                    Số lượng
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập số lượng sản phẩm"
                                    className="absolute-center mt-4 h-12 w-[300px] pl-4 outline-none"
                                    onChange={(
                                        event: React.FormEvent<HTMLInputElement>,
                                    ) => setStock(event.currentTarget.value)}
                                />
                            </div>
                            <button className="absolute-center h-[45px] w-56 overflow-hidden rounded-xl border-2 border-black text-[1.625rem] font-medium text-black hover:bg-black hover:text-white">
                                Thêm sản phẩm
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preview */}

                <div className="mx-auto mb-24 h-fit w-1/2 flex-col">
                    <h1 className="absolute-center pt-24 font-tertiary text-6xl">
                        Preview
                    </h1>
                    {selectedImage && (
                        <div className="absolute-center mt-12 flex-col">
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt=""
                            />
                        </div>
                    )}
                    <div className="ml-24">
                        <h3 className="my-4 mt-12 font-primary text-5xl font-semibold">
                            {name}
                        </h3>
                        <div className="mb-2 font-primary text-3xl text-gray-600">
                            Tác giả: {author}
                        </div>
                        <div className="my-16 font-secondary text-6xl">
                            ₫ {price}
                        </div>
                        <h2 className="m-4 ml-12 font-secondary text-4xl font-semibold lg:ml-20">
                            Thông tin sản phẩm
                        </h2>
                        <table className="mx-8 table-auto font-primary text-2xl lg:mx-12">
                            <tbody className="mx-4 leading-tight">
                                <tr>
                                    <td className="h-14 w-[18rem]">Tác giả</td>
                                    <td>{author}</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">Danh mục</td>
                                    <td>{category}</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">
                                        Nhà xuất bản
                                    </td>
                                    <td>{publishing}</td>
                                </tr>
                                <tr>
                                    <td className="h-14 w-[18rem]">
                                        Số lượng hàng sẵn
                                    </td>
                                    <td>{stock}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="my-4 ml-12 font-secondary text-4xl lg:ml-20">
                            Mô tả sản phẩm
                        </div>
                        <div className="mx-6 font-primary text-2xl leading-normal lg:mx-12">
                            {des}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
