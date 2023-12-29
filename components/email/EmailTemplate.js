export const EmailTemplate = ({ name, email, description }) => (
  <div className="font-serif mb-8">
    <h2 className="text-3xl font-bold mb-4">We've received a new email from: {name}</h2>
    <div className="my-4">
      <p className="text-2xl font-bold underline mb-4">Here's what they had to say:</p>
      <p className="text-lg mb-4">{description}</p>
    </div>
    <div>
      <p className="text-2xl font-bold underline mb-0">Here's their contact info:</p>
      <p className="text-lg mb-0">{email}</p>
    </div>
  </div>
);