import {Swiper, SwiperSlide} from 'swiper/react';
import {ClientsWrapper} from "../styled/clients";
import React from "react";

export const Clients = () => {
    return (
        <ClientsWrapper>
            <div className="container">
                <h2 className="clients-title"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    What Are Clients Say
                </h2>
                <div className="clients-slider"
                     data-aos="fade-right"
                     data-aos-duration="2000">
                    <Swiper slidesPerView={1}>
                        <SwiperSlide>
                            <div className="clients-slide">
                                <p className="clients-slide__response">
                                    “Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt
                                    mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem
                                    accusantium dolore mque laudantium totam rem aperiam.”
                                </p>
                                <h4 className="clients-slide__name">
                                    John Doe
                                </h4>
                                <p className="clients-slide__position">
                                    Director of MNC
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients-slide">
                                <p className="clients-slide__response">
                                    “Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt
                                    mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem
                                    accusantium dolore mque laudantium totam rem aperiam.”
                                </p>
                                <h4 className="clients-slide__name">
                                    John Doe
                                </h4>
                                <p className="clients-slide__position">
                                    Director of MNC
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients-slide">
                                <p className="clients-slide__response">
                                    “Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt
                                    mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem
                                    accusantium dolore mque laudantium totam rem aperiam.”
                                </p>
                                <h4 className="clients-slide__name">
                                    John Doe
                                </h4>
                                <p className="clients-slide__position">
                                    Director of MNC
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </ClientsWrapper>
    )
}
