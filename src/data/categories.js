export const categories = [
  {
    id: 'sofas',
    slug: 'sofas',
    title: 'Sofas',
    description: 'Experience the epitome of comfort and style with our bespoke sofa collections.',
    image: '/images/sofa-category.jpg', // Placeholder
    gridSpan: 'md:col-span-2 md:row-span-2', // Large Item
    subcategories: [
      { id: '2-seater', title: '2 Seater Sofas', image: '/images/sofa-2.jpg' },
      { id: '3-seater', title: '3 Seater Sofas', image: '/images/sofa-3.jpg' },
      { id: 'l-shaped', title: 'L-Shaped Sectionals', image: '/images/sofa-l.jpg' },
      { id: 'chesterfield', title: 'Chesterfield', image: '/images/sofa-chesterfield.jpg' },
    ]
  },
  {
    id: 'chairs',
    slug: 'chairs',
    title: 'Chairs',
    description: 'Accentuate your space with our handcrafted accent and dining chairs.',
    image: '/images/chair-category.jpg', // Placeholder
    gridSpan: 'md:col-span-1 md:row-span-1', // Standard Item
    subcategories: [
      { id: 'accent', title: 'Accent Chairs', image: '/images/chair-accent.jpg' },
      { id: 'dining', title: 'Dining Chairs', image: '/images/chair-dining.jpg' },
      { id: 'armchairs', title: 'Armchairs', image: '/images/chair-arm.jpg' },
    ]
  },
  {
    id: 'beds',
    slug: 'beds',
    title: 'Beds',
    description: 'Rest in luxury with our custom-designed bed frames and headboards.',
    image: '/images/bed-category.jpg', // Placeholder
    gridSpan: 'md:col-span-1 md:row-span-1', // Standard Item
    subcategories: [
      { id: 'king', title: 'King Size', image: '/images/bed-king.jpg' },
      { id: 'queen', title: 'Queen Size', image: '/images/bed-queen.jpg' },
      { id: 'custom-headboards', title: 'Custom Headboards', image: '/images/bed-headboard.jpg' },
    ]
  },
  {
    id: 'wardrobes',
    slug: 'wardrobes',
    title: 'Wardrobes',
    description: 'Maximize space with elegant sliding and walk-in wardrobe solutions.',
    image: '/images/wardrobe-category.jpg', // Placeholder
    gridSpan: 'md:col-span-2 md:row-span-1', // Wide Item
    subcategories: [
      { id: 'sliding', title: 'Sliding Door', image: '/images/wardrobe-sliding.jpg' },
      { id: 'walk-in', title: 'Walk-In Closets', image: '/images/wardrobe-walkin.jpg' },
      { id: 'hinged', title: 'Hinged Door', image: '/images/wardrobe-hinged.jpg' },
    ]
  },
  {
    id: 'recliners',
    slug: 'recliners',
    title: 'Recliners',
    description: 'Unwind in style with our premium manual and motorized recliners.',
    image: '/images/recliner-category.jpg', // Placeholder
    gridSpan: 'md:col-span-1 md:row-span-2', // Tall Item
    subcategories: [
      { id: 'manual', title: 'Manual Recliners', image: '/images/recliner-manual.jpg' },
      { id: 'motorized', title: 'Motorized Recliners', image: '/images/recliner-motorized.jpg' },
      { id: 'cinema', title: 'Home Cinema Seating', image: '/images/recliner-cinema.jpg' },
    ]
  },
  {
    id: 'collections',
    slug: 'collections',
    title: 'Full Collections',
    description: 'Curated sets for a cohesive home aesthetic.',
    image: '/images/collection-category.jpg', // Placeholder
    gridSpan: 'md:col-span-1 md:row-span-1', // Standard Item
    subcategories: [
      { id: 'living-room', title: 'Living Room Sets', image: '/images/set-living.jpg' },
      { id: 'bedroom', title: 'Bedroom Sets', image: '/images/set-bedroom.jpg' },
    ]
  }
];
