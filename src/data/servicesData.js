export const SERVICES = [
  {
    id: 'inspections',
    title: 'Inspections',
    description:
      'Comprehensive annual, 100-hour, and progressive inspections for piston and turbine aircraft. We ensure FAA compliance, detailed reporting, and transparent service history tracking.',
    details: {
      heading: 'Annual Inspections (Mobile)',
      paragraphs: [
        'An annual aircraft inspection will include a complete inspection in accordance with manufacturers specifications or in accordance with 14 CFR Appendix D to Part 43 for aircraft without an approved inspection program. Annuals will be quoted on a flat rate basis for the inspection; details below. If repairs are required to comply with an Airworthiness Directives additional costs can be expected. We will provide a detailed estimate of required (AD) and recommended any additional items before repairs are made. Consumables used during the inspection phase and any required repairs are not included in the flat rate fee and will be charged at normal shop rates.',
      ],
      includedTitle: 'Included in the flat rate inspection:',
      includedItems: [
        'Pre and Post run up for systems check',
        'Compression check',
        'Clean, gap, test, rotate spark plugs',
        'Service battery (if not sealed)',
        'Oil and filter change (labor only)',
        'Air filter change (labor only)',
        'Lubrication and servicing of pulleys, hinges, and bell cranks',
        'Cleaning, inspection, and repacking of wheel bearings',
        'Landing gear extension/retraction test if required',
        'Magneto to engine timing',
        'Removal and installation of inspection panels and interior as necessary for inspection',
        'ELT test and inspection per FAR 91.207 (labor only)',
        'Inspection of aircraft',
        '1 hour of AD research (unless there are no previous AD records)',
      ],
      note:
        'The flat rate inspection does not include oil, filters, o-rings, parts, consumables, compliance of airworthiness directives or labor for repairs. We use a discounted labor rate of $130 per hour for annual inspections which is a fixed based on the size and complexity of your aircraft (e.g., single, multi, complex, etc.)',
    },
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description:
      'Full-spectrum maintenance including airframe, powerplant, avionics troubleshooting, and component replacements — all handled by certified technicians with precision and care.',
    details: {
      heading: 'Maintenance / Repair',
      paragraphs: [
        'As of February 1, 2026 our mobile maintenance and repair rates are charged at $150 per hour. If the repair can be identified within 1 hour, you will be charged 1 hour of maintenance, otherwise an estimate of the repair will be provided prior to the start of work. The customer will never be charged for more than an initial hour at the shop rate without a written estimate and receiving approval to proceed.',
      ],
    },
  },
  {
    id: 'prebuy',
    title: 'Pre-Buy',
    description:
      'Expert pre-purchase evaluations that highlight potential airworthiness issues, maintenance forecasting, and value optimization — confidence before any acquisition.',
    details: {
      heading: 'Pre-Buy Inspection',
      paragraphs: [
        'Our pre-buy Inspection program is based on a calculated discount rate of 75% of the annual inspection cost based on size and complexity of the aircraft. If you purchase the aircraft within 30 days of our pre-buy inspection, we will complete your annual inspection for the remainder (25%) of the annual inspection fixed cost. A pre-buy inspection helps prevent buyers regret and will give you leverage when negotiating a purchase decision or price.',
      ],
    },
  },
  {
    id: 'rates',
    title: 'Rates',
    description:
      'Competitive, transparent, and scalable for owners and fleets. Ask for tailored packages and labor rates.',
    details: {
      heading: 'Flat Rate Annual Inspection Discounted Pricing Effective February 1, 2026',
      ratesTable: {
        headers: ['Cessna', 'Fixed Hours', 'Total', 'Beechcraft', 'Fixed Hours', 'Total'],
        rows: [
          ['140/150/152', '14', '$1,820', '19/23/24', '17', '$2,210'],
          ['170/172/175', '16', '$2,080', '33/35/36', '24', '$3,120'],
          ["Late Model 172's", '18', '$2,340', '55/56/58', '42', '$5,460'],
          ['180/185', '22', '$2,860', '50/60/65/70/76/80', '50', '$6,500'],
          ['205/206/208', '24', '$3,120', 'Navion', '24', '$3,120'],
          ['177/182 RG', '22', '$2,860', '', '', ''],
          ['210', '24', '$3,120', '', '', ''],
          ['310', '34', '$4,420', '', '', ''],
          ['340/302/404/414', '55', '$7,150', '', '', ''],
          ['421', '60', '$7,800', '', '', ''],
        ],
      },
    },
  },
];
