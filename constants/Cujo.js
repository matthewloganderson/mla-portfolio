export default {
	brand: 'Cannondale',
	title: 'Cujo 1',
	model: 'Cujo 1',
	year: '2020',
	components: [
		{
			name: 'wheels',
			components: [
				{
					name: 'tires',
					brand: 'Maxxis',
					model: 'TB96906000',
					title: 'Rekon+',
					description: 'The Rekon+ is an aggressive trail tire inspired by the Ikon+ for intermediate and technical terrain. Wide knobs down the middle provide control under braking and L-shaped side knobs assure support when carving loose turns. With confidence like this you can race more and scout less with the Rekon+.',
					link: 'https://www.maxxis.com/catalog/tire-519-117-rekon-plus#',
					specs: [
						{
							title: 'Size',
							spec: '27.5"'
						},
						{
							title: 'Width',
							spec: '2.8"'
						},
						{
							title: 'ETRTO',
							spec: '71-584'
						},
						{
							title: 'TPI',
							spec: '60'
						},
						{
							title: 'Bead',
							spec: 'Foldable'
						},
						{
							title: 'Weight',
							spec: '825 grams'
						},
						{
							title: 'Max PSI',
							spec: '35 PSI'
						},
						{
							title: 'Compound',
							spec: 'Dual'
						},
						{
							title: 'Tech',
							spec: 'Tubeless Ready, EXO Sidewall Puncture Protection'
						},
						{
							title: 'Color',
							spec: 'Black'
						}
					]
				},
				{
					name: 'rims',
					brand: 'WTB',
					model: 'STX i35',
					title: 'STX i35',
					specs: [
						{
							title: 'Material',
							spec: 'Aluminum'
						},
						{
							title: 'Rim Type',
							spec: 'Tubeless Ready'
						},
						{
							title: 'Front Axel Spacing',
							spec: '15x110mm Boost',
						},
						{
							title: 'Rear Axel Spacing',
							spec: '10x140mm'
						},
						{
							title: 'Rim Inner Width',
							spec: '35mm'
						},
						{
							title: 'Rim Outer Width',
							spec: '39.5mm'
						},
						{
							title: 'Rim Depth',
							spec: '20mm'
						},
						{
							title: 'Spoke Count',
							spec: '32'
						},
						{
							title: 'Weight',
							spec: '2430 grams'
						}
					],
				},
				{
					name: 'front-hub',
					brand: 'Shimano',
					model: 'HB-MT400-B',
					title: 'MT400',
					link: 'https://bike.shimano.com/en-EU/product/component/altus-m370/HB-MT400-B.html',
					description: 'With CENTER LOCK disc rotor mounting, the quick release HB-MT400 front hub offers stiffer wheel rigidity, smooth rotation, and less drag.',
					specs: [
						{
							title: 'Weight',
							spec: '169 grams'
						},
						{
							title: 'Axel Fixing Method',
							spec: '110x15mm Thru Axel'
						},
						{
							title: 'Brake Type',
							spec: 'Center Lock Disc Brake'
						},
						{
							title: 'Flange Diameter',
							spec: '52.8mm'
						},
						{
							title: 'Flange Distance',
							spec: '70.2mm'
						},
						{
							title: 'O.L.D',
							spec: '110mm'
						},
						{
							title: 'Offset',
							spec: '5.3mm'
						},
						{
							title: 'P.C.D',
							spec: '44/44'
						},
						{
							title: 'Seal',
							spec: 'Labyrinth & Contact'
						}
					]
				},
				{
					name: 'rear-hub',
					brand: 'Shimano',
					model: 'FH-MT200-B',
					title: 'MT200',
					link: 'https://bike.shimano.com/en-EU/product/component/acera-m3000/FH-MT200-B.html',
					description: 'With CENTER LOCK disc rotor mounting, the quick release FH-MT200-B freehub offers stiffer wheel rigidity, smooth rotation, and less drag.',
					specs: [
						{
							title: 'Weight',
							spec: '402.5 grams'
						},
						{
							title: 'Axel Fixing Method',
							spec: 'Quick Release'
						},
						{
							title: 'Brake Type',
							spec: 'Center Lock Disc Brake'
						},
						{
							title: 'Flange Diameter',
							spec: '53.8mm'
						},
						{
							title: 'Flange Distance',
							spec: '63.4mm'
						},
						{
							title: 'O.L.D',
							spec: '141mm'
						},
						{
							title: 'Offset',
							spec: '6.65mm'
						},
						{
							title: 'P.C.D',
							spec: '45/45mm'
						},
						{
							title: 'Seal',
							spec: 'Contact'
						}
					]
				},
			]
		},
		{
			name: 'drivetrain',
			components: [
				{
					name: 'rear-cassette',
					brand: 'Sram',
					model: 'CS-PG-1210-A1',
					title: 'SX Eagle, 11-50, 12-speed',
					link: 'https://www.sram.com/en/sram/models/cs-pg-1210-a1',
					specs: [
						{
							title: 'Speed',
							spec: '12'
						},
						{
							title: 'Gearing',
							spec: '11-50t'
						},
						{
							title: 'Color',
							spec: 'Black'
						},
						{
							title: 'Cog Sizes',
							spec: '11,13,15,17,19,22,25,28,32,36,42,50t'
						}
					]
				},
				{
					name: 'derailleur',
					brand: 'Sram',
					model: 'RD-NX-1-B1',
					link: 'https://www.sram.com/en/sram/models/rd-nx-1-b1',
					title: 'NX Eagle',
					description: `This new NX Eagle™ derailleur features the proven SRAM 1x-specific X-HORIZON™ design. The larger, 14-tooth X-SYNC™ lower pulley easily facilitates 11- to 50- and 10- to 50-tooth cassette capacity, and also adds to NX Eagle's overall smooth-pedaling feel. The Type-3 ROLLER BEARING CLUTCH™ provides quiet, consistent performance and durability.`,
					specs: [
						{
							title: 'Cage',
							spec: 'Long'
						},
						{
							title: 'Cable Pull Ratio',
							spec: 'X-Actuation'
						},
						{
							title: 'Speed',
							spec: '12'
						},
						{
							title: 'Color',
							spec: 'Black'
						},
						{
							title: 'Cage Material',
							spec: 'Steel'
						},
						{
							title: 'Pulley Bearings Material',
							spec: 'Steel'
						},
						{
							title: 'Max Tooth',
							spec: '50'
						},
						{
							title: 'Weight',
							spec: '339 grams'
						}
					]
				},
				{
					name: 'crankset',
					brand: 'Sram',
					model: 'FC-SX-1-A1',
					link: 'https://www.sram.com/en/sram/models/fc-sx-1-a1',
					title: 'SX Eagle, 30T',
					description: 'Same chain retention performance as seen in all of the higher-level Eagle drivetrain cranks.',
					specs: [
						{
							title: 'BB Spindle Interface',
							spec: 'DUB, Power Spline',
						},
						{
							title: 'Chainring Material',
							spec: 'Steel'
						},
						{
							title: 'Chainring Size',
							spec: '30t'
						}
					]
				},
				{
					name: 'Shifter',
					brand: 'Sram',
					model: 'SL-SX-1-A1',
					title: 'SX Eagle, 12-speed',
					link: 'https://www.sram.com/en/sram/models/sl-sx-1-a12',
					specs: [
						{
							title: 'Shifter Type',
							spec: 'Trigger'
						},
						{
							title: 'Cable Pull Ratio',
							spec: 'X-Actuation'
						},
						{
							title: 'Color',
							spec: 'Black'
						},
						{
							title: 'Cable Length',
							spec: '2200mm'
						}
					]
				},
				{
					name: 'chain', 
					brand: 'Sram',
					model: 'CN-EAGL-NX-A1',
					title: 'NX Eagle Chain',
					link: 'https://www.sram.com/en/sram/models/cn-eagl-nx-a1',
					description: `The basis of every Eagle drivetrain is its chain-and the NX Eagle chain is designed and manufactured using genuine SRAM's Eagle architecture, so it is fully compatible with every other component in the Eagle ecosystem. The NX Eagle chain features solid pin construction, Eagle PowerLock and smooth, efficient shifting that you can count on every time out.`,
					specs: [
						{
							title: 'Outer Link Finish',
							spec: 'Polished'
						},
						{
							title: 'Color',
							spec: 'Grey',
						},
						{
							title: 'Chain Connector',
							spec: 'PowerLock'
						},
						{
							title: 'Chain Length',
							spec: '126 links'
						},
						{
							title: 'Pin Variant',
							spec: 'Solid Pin'
						},
						{
							title: 'Weight',
							spec: '278.52 grams'
						}
					]
				},
				{
					name: 'bottom-bracket',
					brand: 'Sram',
					title: 'Truvativ Power Spline',
					model: 'BB-PS-A1',
					link: 'https://www.sram.com/en/truvativ/models/bb-ps-a1',
					description: 'A tough bottom bracket that will go as hard as you. The PowerSpline has a heat treated chromoly 12 spline spindle to make sure it can go the distance with even the most demanding riders.',
					specs: [
						{
							title: 'Weight',
							spec: '363 grams'
						}
					]
				}
			]
		},
		{
			name: 'frame',
			brand: 'Cannondale',
			model: 'Cujo 1', 
			title: 'XL Cujo Premium SmartForm C2 Alloy frame',
			specs: [
				{
					title: 'Size',
					spec: 'Extra Large'
				},
				{
					title: 'Seat Tube Length',
					spec: '53.5cm'
				},
				{
					title: 'Top Tube, Horizontal',
					spec: '63.7cm'
				},
				{
					title: 'Head Tube Angle',
					spec: '68.5 degrees'
				},
				{
					title: 'Seat Tube Angle, Effective',
					spec: '73.3 degrees'
				},
				{
					title: 'Standover',
					spec: '85.2cm'
				},
				{
					title: 'Head Tube Length',
					spec: '13cm'
				},
				{
					title: 'Wheelbase',
					spec: '116.7cm'
				},
				{
					title: 'Front Center',
					spec: '73.2cm'
				},
				{
					title: 'Chain Stay Length',
					spec: '44.2cm'
				},
				{
					title: 'Bottom Branket Drop',
					spec: '6.2cm'
				},
				{
					title: 'Bottom Bracket Height',
					spec: '30.8cm'
				},
				{
					title: 'Fork Rake',
					spec: '5.1cm'
				},
				{
					title: 'Trail',
					spec: '9.1cm'
				},
				{
					title: 'Stack',
					spec: '65.9cm'
				},
				{
					title: 'Reach',
					spec: '43.9cm'
				}
			]
		},
		{
			name: 'forks',
			brand: 'RockShox',
			model: 'FS-JDYS-TK-A3',
			title: 'Judy Silver TK',
			link: 'https://www.sram.com/en/rockshox/models/fs-jdys-tk-a3',
			description: 'Judy Silver TK level forks give you stiff steel upper tubes and TurnKey™ lockout.',
			specs: [
				{
					title: 'Travel',
					spec: '120mm',
				},
				{
					title: 'Spring',
					spec: 'Coil, Solo Air'
				},
				{
					title: 'Fork Offset',
					spec: '42mm'
				},
				{
					title: 'Upper Tube Type',
					spec: '30mm straight wall steel',
				},
				{
					title: 'Damper Type',
					spec: 'Turnkey'
				}
			]
		},
		{
			name: 'handlebars',
			components: [
				{
					name: 'grips',
					brand: 'Cannondale',
					title: 'Locking Grips'
				},
				{
					name: 'bars',
					brand: 'Cannondale',
					title: 'Cannondale 3 Riser, 6061 Alloy, 15mm rise, 8° sweep, 4° rise, 780mm'
				},
			]
		},
		{
			name: 'brakes',
			components: [
				{
					name: 'calipers',
					brand: 'Shimano',
					model: 'BR-M8100',
					link: 'https://bike.shimano.com/en-EU/product/component/deore-xt-m8100/BR-M8100.html',
					description: 'The SHIMANO DEORE XT M8100 caliper features lightweight braking performance and reliable stopping power in all conditions',
					title: 'DEORE XT Hydraulic Disc Brake',
					specs: [
						{
							title: 'Weight',
							spec: '392 grams'
						},
						{
							title: 'Type',
							spec: 'Hydrolic Disc Brake'
						},
					]
				},
				{
					name: 'levers',
					brand: 'Shimano',
					model: 'BL-M8100',
					title: 'DEORE XT Hydraulic Disc Brake Lever I-SPEC EV Clamp Band',
					link: "https://bike.shimano.com/en-EU/product/component/deore-xt-m8100/BL-M8100.html",
					description: 'With a focus on reduced weight and cross-country tuned stopping power, the SHIMANO DEORE XT BL-M8100 lever provides intuitive modulation so that you can explore your limits with confidence.',
					specs: [
						{
							title: 'Weight',
							spec: '392 grams'
						}
					]
				},
				{
					name: 'front-rotor',
					brand: 'Shimano',
					model: 'SM-RT98',
					link: 'https://bike.shimano.com/en-EU/product/component/xtr-m980/SM-RT98.html',
					title: 'XTR 180mm Rotor',
					specs: [
						{
							title: 'Size',
							spec: '180mm'
						},
						{
							title: 'Weight',
							spec: '122.5 grams'
						},
					]
				},
				{
					name: 'rear-rotor',
					brand: 'Shimano',
					model: 'RT-MT800',
					link: 'https://bike.shimano.com/en-EU/product/component/deore-xt-m8100/RT-MT800.html',
					title: 'DEORE XT CENTER LOCK Disc Brake Rotor',
					description: `SHIMANO's DEORE XT RT-RT800 compact and lightweight disc brake rotors feature rapid heat dissipation thanks to ICE TECHNOLOGIES FREEZA heat management system. Installing and removing the rotors is quick and easy with SHIMANO's CENTER LOCK design.`,
					specs: [
						{
							title: 'Size',
							spec: '160mm'
						},
						{
							title: 'Weight',
							spec: '108 grams'
						}
					]
				}
			]
		},
		{
			name: 'saddle',
			title: 'Stage 3',
			brand: 'Cannondale'
		},
		{
			name: 'dropperPost',
			brand: 'TranzX',
			title: 'Dropper Post, 120mm Travel'
		}
	],
}