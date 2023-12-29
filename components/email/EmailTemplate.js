export const EmailTemplate = ({ name, email, description }) => (
  <div className="font-serif mb-8">
    <h2 className="text-2xl font-bold mb-4">We've received a new email from: {name}</h2>
    <br />
    <div className="mb-4">
      <p className="text-lg mb-4">They're interested in working with you!</p>
      <p className="text-lg mb-4">Here's what they had to say:</p>
      <p className="text-lg mb-4">{description}</p>
    </div>
    <br />
    <div className="mb-4">
      <p className="text-lg mb-0">Here's their contact info:</p>
      <p className="text-lg mb-0">{email}</p>
    </div>
  </div>
);