let mainArr = [
	// column
	[
		[0, 1],
		[0, 2],
		[0, 3],
		//rotate 90 degrees
		[
			[-1, 1],
			[0, 0],
			[1, -1],
			[2, -2]
		],
		//rotate 180 degrees
		[
			[1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2]
		],
		//rotate 270 degrees
		[
			[-1, 1],
			[0, 0],
			[1, -1],
			[2, -2]
		],
		//rotate 360 degrees
		[
			[1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2]
		]
	],
	// square
	[
		[1, 0],
		[0, 1],
		[1, 1],
		//rotate 90 degrees
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		],
		//rotate 180 degrees
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		],
		//rotate 270 degrees
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		],
		//rotate 360 degrees
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		]
	],
	// letter L
	[
		[1, 0],
		[0, 1],
		[0, 2],
		//rotate 90 degrees
		[
			[0, 0],
			[-1, 1],
			[1, 0],
			[2, -1]
		],
		//rotate 180 degrees
		[
			[1, -1],
			[1, -1],
			[-1, 0],
			[-1, 0]
		],
		//rotate 270 degrees
		[
			[-1, 0],
			[0, -1],
			[2, -2],
			[1, -1]
		],
		//rotate 360 degrees
		[
			[0, -1],
			[0, -1],
			[-2, 0],
			[-2, 0]
		]
	],
	// reverse letter L
	[
		[1, 0],
		[1, 1],
		[1, 2],
		//rotate 90 degrees
		[
			[0, 0],
			[0, 0],
			[1, -1],
			[-1, -1]
		],
		//rotate 180 degrees
		[
			[0, -1],
			[-1, 0],
			[-2, 1],
			[1, 0]
		],
		//rotate 270 degrees
		[
			[2, 0],
			[0, 0],
			[1, -1],
			[1, -1]
		],
		//rotate 360 degrees
		[
			[-2, 0],
			[1, -1],
			[0, 0],
			[-1, 1]
		]
	],
	// left z
	[
		[1, 0],
		[1, 1],
		[2, 1],
		//rotate 90 degrees
		[
			[2, -1],
			[0, 0],
			[1, -1],
			[-1, 0]
		],
		//rotate 180 degrees
		[
			[-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1]
		],
		//rotate 270 degrees
		[
			[2, -1],
			[0, 0],
			[1, -1],
			[-1, 0]
		],
		//rotate 360 degrees
		[
			[-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1]
		]
	],
	// rigth z
	[
		[1, 0],
		[-1, 1],
		[0, 1],
		//rotate 90 degrees
		[
			[0, -1],
			[-1, 0],
			[2, -1],
			[1, 0]
		],
		//rotate 180 degrees
		[
			[0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1]
		],
		//rotate 270 degrees
		[
			[0, -1],
			[-1, 0],
			[2, -1],
			[1, 0]
		],
		//rotate 360 degrees
		[
			[0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1]
		]
	],
	// lego
	[
		[1, 0],
		[2, 0],
		[1, 1],
		//rotate 90 degrees
		[
			[1, -1],
			[0, 0],
			[0, 0],
			[0, 0]
		],
		//rotate 180 degrees
		[
			[0, 0],
			[-1, 0],
			[-1, 0],
			[1, -1]
		],
		//rotate 270 degrees
		[
			[1, -1],
			[1, -1],
			[1, -1],
			[0, 0]
		],
		//rotate 360 degrees
		[
			[-2, 0],
			[0, -1],
			[0, -1],
			[-1, -1]
		]
	],
];