import DeliveryBanner from "@/components/DeliveryBanner";
import RetailerBanner from "@/components/RetailerBanner";

export default function logo() {
  return (
    <div className="bg-[#E1F6FF] h-screen pt-20">
      <div className="carousel-container relative overflow-hidden py-0 px-0 mx-0 whitespace-nowrap bg-[#008BE7] min-w-screen flex">
        <RetailerBanner />
        <RetailerBanner />
      </div>
      <div className="h-36" />
      <div className="delivery-container relative overflow-hidden py-0 px-0 mx-0 whitespace-nowrap bg-[#FFFFFF] min-w-screen flex">
        <DeliveryBanner />
        <DeliveryBanner />
      </div>
    </div>
  );
}
