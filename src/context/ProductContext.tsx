// import React, {
//   createContext,
//   useEffect,
//   createRef,
//   useRef,
//   useState,
// } from "react";

// type CartItem = {
//   img: string;
//   title: string;
//   price: string;
//   quantity: string | number;
// };

// type ProductContextType = {
//   //   images: string[];
//   //   thumbnails: string[];
//   thumbnailRef: React.RefObject<HTMLDivElement>;
//   //   previewImg: string;
//   modal: boolean;
//   modalThumbnailRef: React.MutableRefObject<HTMLDivElement | null>;
//   sliderRef: React.MutableRefObject<HTMLDivElement | null>;
//   quantityCount: number;
//   cartItems: CartItem[];
//   showCart: boolean;
//   total: number;
//   productImgRef: React.MutableRefObject<HTMLImageElement | null>;
//   productTitleRef: React.RefObject<HTMLDivElement>;
//   productPriceRef: React.MutableRefObject<HTMLDivElement | null>;
//   productQuantityRef: React.MutableRefObject<HTMLInputElement | null>;
//   addCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   setQuantityCount: React.Dispatch<React.SetStateAction<number>>;
//   previewDisplay: (e: React.MouseEvent<HTMLImageElement>) => void;
//   lightBox: () => void;
//   close: () => void;
//   nextPreview: () => void;
//   prevPreview: () => void;
//   nextSlide: () => void;
//   prevSlide: () => void;
//   quantity: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   cartDisplay: () => void;
//   //   deleteItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
// };

// const ProductContext = createContext<ProductContextType>(
//   {} as ProductContextType
// );

// export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const images = [
//     { imgProduct1: "/assets/image-product-1-thumbnail.jpg" },
//     { imgProduct2: "/assets/image-product-2.jpg" },
//     { imgProduct3: "/assets/image-product-3.jpg" },
//     { imgProduct4: "/assets/image-product-4.jpg" },
//   ];
//   //   const [previewImg, setPreviewImg] = useState<any>(images.imgProduct1);
//   const [thumbnails, setThumbnails] = useState([
//     { thumbnail1: "/assets/image-product-1-thumbnail.jpg" },
//     { thumbnail2: "/assets/image-product-2-thumbnail.jpg" },
//     { thumbnail3: "/assets/image-product-3-thumbnail.jpg" },
//     { thumbnail4: "/assets/image-product-4-thumbnail.jpg" },
//   ]);
//   const [modal, setModal] = useState<boolean>(false);
//   //   const currentIndex = parseInt(images.indexOf(previewImg), 10);
//   const thumbnailRef = createRef<HTMLDivElement>();
//   const modalThumbnailRef = useRef<HTMLDivElement | null>(null);
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [slideCount, setSlideCount] = useState<number>(0);
//   const [quantityCount, setQuantityCount] = useState<number>(0);
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [showCart, setShowCart] = useState<boolean>(false);
//   const [total, setTotal] = useState<number>(0);
//   const productImgRef = useRef<HTMLImageElement | null>(null);
//   const productTitleRef = createRef<HTMLDivElement>();
//   const productPriceRef = useRef<HTMLDivElement | null>(null);
//   const productQuantityRef = useRef<HTMLInputElement | null>(null);

//   //   useEffect(() => {
//   //     thumbnailActive();
//   //     modalThumbnailActive();
//   //     // eslint-disable-next-line react-hooks/exhaustive-deps
//   //   }, [modal]);

//   const previewDisplay = (e: React.MouseEvent<HTMLImageElement>): void => {
//     // setPreviewImg(images[e.currentTarget.id]);
//   };

//   const lightBox = (): void => {
//     setModal(true);
//   };

//   const close = (): void => {
//     setModal(false);
//   };

//   const nextPreview = (): void => {
//     // if (currentIndex > 2) {
//     //   setPreviewImg(images[currentIndex]);
//     // } else {
//     //   setPreviewImg(images[currentIndex + 1]);
//     // }
//   };

//   const prevPreview = (): void => {
//     // if (currentIndex < 1) {
//     //   setPreviewImg(images[currentIndex]);
//     // } else {
//     //   setPreviewImg(images[currentIndex - 1]);
//     // }
//   };

//   const thumbnailActive = (): void => {
//     if (thumbnailRef.current) {
//       // REMOVE STYLE FROM INACTIVE THUMBNAIL
//       thumbnailRef.current.childNodes.forEach((img) => {
//         // img.classList.remove("border-2", "border-orange");
//         // img.firstElementChild?.classList.remove("opacity-50");
//       });

//       // STYLE ACTIVE THUMBNAIL
//       //   const activeThumbnail = thumbnailRef.current.childNodes[
//       //     // currentIndex
//       //   ] as HTMLDivElement;
//       //   const activeThumbnailImage =
//       //     activeThumbnail.firstElementChild as HTMLImageElement;
//       //   activeThumbnail.classList.add("border-2", "border-orange");
//       //   activeThumbnailImage.classList.add("opacity-50");
//     }
//   };

//   const modalThumbnailActive = (): void => {
//     if (modal && modalThumbnailRef.current) {
//       // REMOVE STYLE FROM INACTIVE THUMBNAIL
//       const modalThumbnailImgs = modalThumbnailRef.current.parentElement
//         ?.childNodes as NodeListOf<HTMLElement>;
//       modalThumbnailImgs.forEach((img) => {
//         img.classList.remove("border-2", "border-orange");
//         img.firstElementChild?.classList.remove("opacity-50");
//       });

//       // STYLE ACTIVE THUMBNAIL
//       //   const activeModalThumbnail = modalThumbnailImgs[currentIndex];
//       //   const activeModalThumbnailImage =
//       //     activeModalThumbnail.firstElementChild as HTMLImageElement;
//       //   activeModalThumbnail.classList.add("border-2", "border-orange");
//       //   activeModalThumbnailImage.classList.add("opacity-50");
//     }
//   };

//   const nextSlide = (): void => {
//     if (sliderRef.current) {
//       const slideLength = sliderRef.current.childElementCount;
//       if (
//         slideCount > slideLength - 2 ||
//         (slideCount > slideLength - 3 && window.innerWidth > 640)
//       ) {
//         setSlideCount(slideCount);
//         sliderRef.current.style.transform = `translateX(-${100 * slideCount}%)`;
//       } else {
//         setSlideCount(slideCount + 1);
//         sliderRef.current.style.transform = `translateX(-${
//           100 * (slideCount + 1)
//         }%)`;
//       }
//     }
//   };

//   const prevSlide = (): void => {
//     if (sliderRef.current) {
//       if (slideCount === 0) {
//         setSlideCount(slideCount);
//         sliderRef.current.style.transform = `translateX(-${100 * slideCount}%)`;
//       } else {
//         setSlideCount(slideCount - 1);
//         sliderRef.current.style.transform = `translateX(-${
//           100 * (slideCount - 1)
//         }%)`;
//       }
//     }
//   };

//   const quantity = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     const action = e.currentTarget.innerText;
//     if (action === "-") {
//       setQuantityCount((quantityCount) => Math.max(quantityCount - 1, 0));
//     } else if (action === "+") {
//       setQuantityCount((quantityCount) => Math.min(quantityCount + 1, 100));
//     } else {
//       setQuantityCount(() => Math.min(parseInt(e.currentTarget.value), 100));
//     }
//   };
//   const cartDisplay = (): void => {
//     setShowCart(!showCart);
//   };

//   const addCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     if (quantityCount < 1) {
//       setQuantityCount(quantityCount + 1);
//     }

//     // setCartItems([
//     //   ...cartItems,
//     //   {
//     //     img: thumbnails[0],
//     //     title: productTitleRef.current?.innerText || "",
//     //     price: productPriceRef.current?.innerText || "",
//     //     quantity:
//     //       productQuantityRef.current?.value < "1"
//     //         ? 1
//     //         : productQuantityRef.current?.value,
//     //   },
//     // ]);

//     //     setTotal(
//     //       productQuantityRef.current?.value < "1"
//     //         ? 1
//     //         : parseInt(productQuantityRef.current?.value, 10)
//     //     );
//     //   };

//     const deleteItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
//       // const product =
//       //   e.currentTarget.parentElement?.parentElement?.parentElement?.childNodes[1]
//       //     ?.firstElementChild?.textContent || "";
//       // setCartItems(cartItems.filter((item) => item.title !== product));
//       setTotal(0);
//     };
//   };
//   return (
//     <div>
//       <ProductContext.Provider
//         value={{
//           //   images,
//           //   thumbnails,
//           thumbnailRef,
//           //   previewImg,
//           modal,
//           modalThumbnailRef,
//           sliderRef,
//           quantityCount,
//           cartItems,
//           showCart,
//           total,
//           productImgRef,
//           productTitleRef,
//           productPriceRef,
//           productQuantityRef,
//           addCart,
//           setQuantityCount,
//           previewDisplay,
//           lightBox,
//           close,
//           nextPreview,
//           prevPreview,
//           nextSlide,
//           prevSlide,
//           quantity,
//           cartDisplay,
//           //   deleteItem,
//         }}
//       >
//         {children}
//       </ProductContext.Provider>
//     </div>
//   );
// };

// export default ProductContext;
import React from "react";

function ProductContext() {
  return <div>ProductContext</div>;
}

export default ProductContext;
