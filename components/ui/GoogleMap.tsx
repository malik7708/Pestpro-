export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26561.354540658052!2d73.14612630317366!3d33.67867969984952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeba0cfecf065%3A0x25eb2c3f81f2949!2sIslamabad%20Pest%20Control%2C%20Termite%20(Deemak)%20Control%20%26%20Fumigation%20Services%20Islamabad%20and%20Rawalpindi!5e0!3m2!1sen!2s!4v1783071470286!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Islamabad Pest Control Location"
        className="w-full"
      />
    </div>
  );
}