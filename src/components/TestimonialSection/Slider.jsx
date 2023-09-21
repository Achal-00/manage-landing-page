import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="h-[100%] w-[90dvw] landscape:w-[50dvw] mx-auto bg-[#f5f5f5] rounded-[0.5em]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper overflow-y-visible"
      >
        <SwiperSlide>
          <div className="grid gap-[1em] px-[5%] py-[20%] landscape:py-[10%] text-center rounded-[0.5em] relative">
            <p className="text-[120%] text-dark-blue">Anisha Li</p>
            <p className="text-dark-greyish-blue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
            <img
              src="avatar-anisha.png"
              alt=""
              className="w-[5em] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid gap-[1em] px-[5%] py-[20%] landscape:py-[10%] text-center rounded-[0.5em] relative">
            <p className="text-[120%] text-dark-blue">Ali Bravo</p>
            <p className="text-dark-greyish-blue">
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </p>
            <img
              src="avatar-ali.png"
              alt=""
              className="w-[5em] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid gap-[1em] px-[5%] py-[20%] landscape:py-[10%] text-center rounded-[0.5em] relative">
            <p className="text-[120%] text-dark-blue">Richard Watts</p>
            <p className="text-dark-greyish-blue">
              "Manage allows us to provide structure and process. It keeps us
              organized and focused. I can't stop recommending them to everyone
              i talk to!"
            </p>
            <img
              src="avatar-richard.png"
              alt=""
              className="w-[5em] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid gap-[1em] px-[5%] py-[20%] landscape:py-[10%] text-center rounded-[0.5em] relative">
            <p className="text-[120%] text-dark-blue">Shanai Gough</p>
            <p className="text-dark-greyish-blue">
              "Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive."
            </p>
            <img
              src="avatar-shanai.png"
              alt=""
              className="w-[5em] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
