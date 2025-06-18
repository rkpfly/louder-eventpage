import VipTablesForm from "./VipTablesForm";

export default function VipTables() {
  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 pt-8">

        {/* Hero Image */}
        <img
          src="./vip-table2.jpg"
          alt="Hero Background"
          className="inset-0 w-full h-full object-cover mb-12 rounded-lg"
        />

        {/* Headings */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">VIP TABLES</h1>
          <h1 className="text-2xl font-bold mb-12">SEASON 2025</h1>
        </div>

        {/* Intro Content */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-gray-800">
            Step into exclusivity. Our VIP tables offer the ultimate party
            experience — personalized service, front-row energy, and a space
            that’s all yours. Whether it’s a celebration or just a night to
            remember, booking a VIP table guarantees you party in style,
            comfort, and with priority access.
          </p>
          <p className="mt-4 text-md text-gray-700">
            Fill out the form below and our team will get back to you shortly
            with availability, package options, and everything you need to make
            your night unforgettable.
          </p>
        </div>

        {/* Form */}
        <VipTablesForm />
      </div>
    </div>
  );
}
