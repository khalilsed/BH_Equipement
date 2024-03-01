export default function Photo() {
    return (
      <div className="bg-cover bg-no-repeat w-auto lg:mx-12 mx-6 shadow-md relative overflow-hidden flex items-center justify-center rounded-3xl mt-8 h-96 bg-top bg-[url('./assets/le.png')]">
        <div className="text-white text-center">
          <h2 className="text-5xl font-semibold font-montserrat mb-5">
            Contactez nous
          </h2>
          <p>
            N hésitez pas à nous contacter à tout moment. Nous vous répondrons dès
            que possible.
          </p>
        </div>
      </div>
    );
  }