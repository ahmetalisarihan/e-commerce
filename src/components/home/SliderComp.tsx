import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">Nike Pegasus Series</div>
            <div className="text-lg my-4 ">
              Her koşuda esnek bir deneyim sunan Peg'in bildiğin yapısı,
              hedeflerine ulaşmana yardımcı olacak sana özgü stille geri
              dönüyor. Bu model, sevdiğin hızlı tepki kabiliyetini ve nötr
              desteği sunarken ayak kemeri ve burun kısmı gibi ayağın hassas
              bölgelerinde daha fazla rahatlık sağlar. Uzun maraton koşuları,
              güneş batmadan önce hız kazanma antrenmanı veya spontane grup
              koşusu yapman fark etmeksizin her durumda güven veren bu ayakkabı,
              her gün giyebileceğin, performansı kanıtlanmış bir yol koşusu
              stilidir
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
          style={{ width: "40%", height: "30%" }}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a2cb9d2e-70bc-480a-8abc-86d5080ceb57/pegasus-40-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-f0TcNR.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
        <div className="">
            <div className="text-6xl font-bold">Nike Pegasus Series</div>
            <div className="text-lg my-4 ">
              Her koşuda esnek bir deneyim sunan Peg'in bildiğin yapısı,
              hedeflerine ulaşmana yardımcı olacak sana özgü stille geri
              dönüyor. Bu model, sevdiğin hızlı tepki kabiliyetini ve nötr
              desteği sunarken ayak kemeri ve burun kısmı gibi ayağın hassas
              bölgelerinde daha fazla rahatlık sağlar. Uzun maraton koşuları,
              güneş batmadan önce hız kazanma antrenmanı veya spontane grup
              koşusu yapman fark etmeksizin her durumda güven veren bu ayakkabı,
              her gün giyebileceğin, performansı kanıtlanmış bir yol koşusu
              stilidir
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
          style={{ width: "40%", height: "30%" }}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639b9866-b3b6-44e7-8b9c-b516fd7a591f/pegasus-40-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-HTDVsQ.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
