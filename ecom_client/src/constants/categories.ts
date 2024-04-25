export const categories = [
  "Smartphone",
  "Feature Phone",
  "Gaming Phone",
  "Budget Phone",
  "Flagship Phone",
  "Phablet",
  "Over-Ear Headphones",
  "On-Ear Headphones",
  "In-Ear Headphones",
  "True Wireless Earbuds",
  "Noise-Canceling Headphones",
  "Sports Headphones",
  "Ultrabook",
  "Gaming Laptop",
  "Business Laptop",
  "Budget Laptop",
  "2-in-1 Laptop",
  "Workstation",
].map((category) => {
  if (category.includes("Phone")) {
    return `${category} Phone`;
  } else if (category.includes("Headphones")) {
    return `${category} Headphones`;
  } else if (category.includes("Laptop")) {
    return `${category} Laptop`;
  }
  return category;
});
