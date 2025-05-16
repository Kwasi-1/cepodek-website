const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or want to book an appointment? We’d love to hear
            from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md text-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Details
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-xl">
                📞 <span className="font-medium">Phone:</span> +233 24 000 0000
              </p>
              <p className="text-xl">
                ✉️ <span className="font-medium">Email:</span>{" "}
                info@beautysalon.com
              </p>
              <p className="text-xl">
                📍 <span className="font-medium">Location:</span> 123 Glamour
                Ave, Accra, Ghana
              </p>
              <p className="text-xl">
                🕒 <span className="font-medium">Hours:</span> Mon - Sat, 9am -
                7pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
