import { div, section, span } from "@thi.ng/hiccup-html";

// 1. The Word Generator - just need text and global index
const word = (text: string, index: number) =>
	span(
		{
			class: "word",
			"data-i": index, // Magic sauce ro Float32Array,
			"data-active": "false",
		},

		text + " " // xtra space for layout
	);

// 2. Page Structure
export const page1 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("My", 0),
		word("teachers", 1),
		word("look", 2),
		word("at", 3),
		word("me", 4),
		word("funny", 5),
		word("when", 6),
		word("I", 7),
		word("make", 8)
	),
	div(
		{ class: "line" },
		word("weird", 9),
		word("noises,", 10),
		word("but", 11),
		word("my", 12),
		word("friends,", 13),
		word("they", 14),
		word("usually", 15)
	),
	div(
		{ class: "line" },
		word("just", 16),
		word("laugh.", 17),
		word("It's", 18),
		word("funny", 19),
		word("to", 20),
		word("them,", 21),
		word("and", 22),
		word("they", 23),
		word("are", 24)
	),
	div(
		{ class: "line" },
		word("pretty", 25),
		word("cool", 26),
		word("about", 27),
		word("it—they", 28),
		word("don't", 29),
		word("make", 30),
		word("fun", 31),
		word("of", 32)
	),
	div(
		{ class: "line" },
		word("me", 33),
		word("really", 34),
		word("but", 35),
		word("only", 36),
		word("get", 37),
		word("a", 38),
		word("kick", 39),
		word("out", 40),
		word("of", 41)
	),
	div(
		{ class: "line" },
		word("it—like", 42),
		word("when", 43),
		word("we", 44),
		word("are", 45),
		word("in", 46),
		word("the", 47),
		word("middle", 48),
		word("of", 49),
		word("a", 50),
		word("test", 51)
	),
	div(
		{ class: "line" },
		word("or", 52),
		word("something,", 53),
		word("and", 54),
		word("then", 55),
		word("out", 56),
		word("of", 57),
		word("nowhere", 58),
		word("I", 59)
	),
	div(
		{ class: "line" },
		word("let", 60),
		word("out", 61),
		word("a", 62),
		word("bark,", 63),
		word("I", 64),
		word("mean", 65),
		word("a", 66),
		word("loud", 67),
		word("bark,", 68),
		word("where", 69)
	),
	div(
		{ class: "line" },
		word("everyone", 70),
		word("turns", 71),
		word("around", 72),
		word("to", 73),
		word("me", 74),
		word("and", 75),
		word("smiles,", 76)
	),
	div(
		{ class: "line" },
		word("and", 77),
		word("then", 78),
		word("someone", 79),
		word("starts", 80),
		word("laughing,", 81),
		word("and", 82)
	),
	div(
		{ class: "line" },
		word("then", 83),
		word("everyone", 84),
		word("else", 85),
		word("gets", 86),
		word("going.", 87),
		word("To", 88),
		word("tell", 89),
		word("you", 90)
	),
	div(
		{ class: "line" },
		word("the", 91),
		word("truth", 92),
		word("it", 93),
		word("doesn't", 94),
		word("bother", 95),
		word("me", 96),
		word("at", 97),
		word("all,", 98),
		word("and", 99),
		word("I", 100)
	),
	div(
		{ class: "line" },
		word("laugh", 101),
		word("right", 102),
		word("along", 103),
		word("with", 104),
		word("them", 105),
		word("most", 106),
		word("of", 107),
		word("the", 108),
		word("time.", 109)
	)
);
export const page2 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I", 110),
		word("go", 111),
		word("to", 112),
		word("this", 113),
		word("school", 114),
		word("where", 115),
		word("our", 116),
		word("teachers", 117),
		word("are", 118)
	),
	div(
		{ class: "line" },
		word("mostly", 119),
		word("nuns—we", 120),
		word("have", 121),
		word("to", 122),
		word("go", 123),
		word("to", 124),
		word("church", 125)
	),
	div(
		{ class: "line" },
		word("every", 126),
		word("week,", 127),
		word("and", 128),
		word("sometimes", 129),
		word("I'll", 130),
		word("bark", 131),
		word("in", 132)
	),
	div(
		{ class: "line" },
		word("church", 133),
		word("too.", 134),
		word("This", 135),
		word("one", 136),
		word("nun,", 137),
		word("Sister", 138),
		word("Agatha,", 139)
	),
	div(
		{ class: "line" },
		word("told", 140),
		word("me", 141),
		word("that", 142),
		word("Jesus", 143),
		word("didn't", 144),
		word("appreciate", 145),
		word("me", 146)
	),
	div(
		{ class: "line" },
		word("barking", 147),
		word("like", 148),
		word("that", 149),
		word("in", 150),
		word("church", 151),
		word("and", 152),
		word("disrupting", 153)
	),
	div(
		{ class: "line" },
		word("everything.", 154),
		word("She's", 155),
		word("mean", 156),
		word("though", 157),
		word("it's", 158)
	),
	div(
		{ class: "line" },
		word("funny—there's", 159),
		word("always", 160),
		word("that", 161),
		word("question", 162),
		word("about", 163)
	),
	div(
		{ class: "line" },
		word("nuns—“is", 164),
		word("she", 165),
		word("mean?”—that", 166),
		word("everyone's", 167)
	),
	div(
		{ class: "line" },
		word("always", 168),
		word("talkin'", 169),
		word("about", 170),
		word("whenever", 171),
		word("you", 172),
		word("find", 173),
		word("out", 174)
	),
	div(
		{ class: "line" },
		word("who", 175),
		word("your", 176),
		word("teachers", 177),
		word("will", 178),
		word("be", 179),
		word("for", 180),
		word("the", 181),
		word("next", 182),
		word("year.", 183)
	),
	div(
		{ class: "line" },
		word("It's", 184),
		word("always", 185),
		word("how", 186),
		word("mean", 187),
		word("Sister", 188),
		word("so", 189),
		word("and", 190),
		word("so", 191),
		word("is,", 192)
	),
	div(
		{ class: "line" },
		word("and", 193),
		word("how", 194),
		word("this", 195),
		word("one", 196),
		word("cuts", 197),
		word("your", 198),
		word("hair", 199),
		word("when", 200)
	),
	div(
		{ class: "line" },
		word("you're", 201),
		word("not", 202),
		word("looking", 203),
		word("if", 204),
		word("it", 205),
		word("grows", 206),
		word("too", 207),
		word("long", 208),
		word("and", 209)
	),
	div(
		{ class: "line" },
		word("how", 210),
		word("another", 211),
		word("one", 212),
		word("will", 213),
		word("ask", 214),
		word("you", 215),
		word("to", 216),
		word("hold", 217),
		word("your", 218)
	),
	div(
		{ class: "line" },
		word("palms", 219),
		word("out", 220),
		word("so", 221),
		word("she", 222),
		word("can", 223),
		word("smack’em", 224),
		word("with", 225),
		word("a", 226),
		word("ruler.", 227)
	),
	div(
		{ class: "line" },
		word("My", 228),
		word("brother", 229),
		word("told", 230),
		word("me", 231),
		word("all", 232),
		word("kinds", 233),
		word("of", 234),
		word("horrible", 235),
		word("stuff", 236)
	),
	div(
		{ class: "line" },
		word("about", 237),
		word("every", 238),
		word("nun", 239),
		word("I", 240),
		word("was", 241),
		word("gonna'", 242),
		word("have—but", 243)
	),
	div(
		{ class: "line" },
		word("with", 244),
		word("Sister", 245),
		word("Agatha,", 246),
		word("he", 247),
		word("wasn't", 248),
		word("kidding.", 249)
	),
	div(
		{ class: "line" },
		word("Yesterday,", 250),
		word("after", 251),
		word("telling", 252),
		word("me", 253),
		word("all", 254),
		word("about", 255),
		word("how", 256)
	),
	div(
		{ class: "line" },
		word("Jesus", 257),
		word("didn't", 258),
		word("appreciate", 259),
		word("me", 260),
		word("disrupting", 261),
		word("His", 262)
	),
	div(
		{ class: "line" },
		word("Mass,", 263),
		word("she", 264),
		word("smacked", 265),
		word("me", 266),
		word("in", 267),
		word("the", 268),
		word("back", 269),
		word("of", 270),
		word("the", 271)
	),
	div(
		{ class: "line" },
		word("head,", 272),
		word("and", 273),
		word("told", 274),
		word("me", 275),
		word("maybe", 276),
		word("that", 277),
		word("will", 278),
		word("stop", 279),
		word("me", 280)
	),
	div(
		{ class: "line" },
		word("from", 281),
		word("shaking", 282),
		word("it.", 283)
	)
);
export const page3 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I", 284),
		word("figured", 285),
		word("though,", 286),
		word("that", 287),
		word("Jesus", 288),
		word("didn't", 289),
		word("mind", 290),
		word("so", 291)
	),
	div(
		{ class: "line" },
		word("much—since", 292),
		word("I", 293),
		word("prayed", 294),
		word("to", 295),
		word("Him", 296),
		word("all", 297),
		word("the", 298),
		word("time", 299),
		word("to", 300)
	),
	div(
		{ class: "line" },
		word("help", 301),
		word("me", 302),
		word("to", 303),
		word("stop", 304),
		word("shaking", 305),
		word("my", 306),
		word("head,", 307),
		word("and", 308)
	),
	div(
		{ class: "line" },
		word("barking,", 309),
		word("though", 310),
		word("it", 311),
		word("never", 312),
		word("seemed", 313),
		word("to", 314),
		word("help.", 315)
	),
	div(
		{ class: "line" },
		word("The", 316),
		word("way", 317),
		word("I", 318),
		word("see", 319),
		word("it,", 320),
		word("if", 321),
		word("He", 322),
		word("didn't", 323),
		word("want", 324),
		word("to", 325),
		word("help,", 326)
	),
	div(
		{ class: "line" },
		word("then", 327),
		word("He", 328),
		word("probably", 329),
		word("didn't", 330),
		word("care", 331),
		word("too", 332),
		word("much", 333),
		word("if", 334),
		word("I", 335)
	),
	div(
		{ class: "line" },
		word("did", 336),
		word("it", 337),
		word("in", 338),
		word("church.", 339),
		word("Sister", 340),
		word("Agatha", 341),
		word("and", 342),
		word("the", 343),
		word("rest", 344)
	),
	div(
		{ class: "line" },
		word("of", 345),
		word("the", 346),
		word("teachers", 347),
		word("told", 348),
		word("my", 349),
		word("mom", 350),
		word("that", 351),
		word("I", 352),
		word("was", 353)
	),
	div(
		{ class: "line" },
		word("forever", 354),
		word("disrupting", 355),
		word("the", 356),
		word("classes", 357),
		word("and", 358),
		word("Masses,", 359)
	),
	div(
		{ class: "line" },
		word("and", 360),
		word("that", 361),
		word("they", 362),
		word("were", 363),
		word("thinking", 364),
		word("of", 365),
		word("taking", 366)
	),
	div(
		{ class: "line" },
		word("further", 367),
		word("action", 368),
		word("if", 369),
		word("I", 370),
		word("didn't", 371),
		word("stop,", 372),
		word("whatever", 373)
	),
	div(
		{ class: "line" },
		word("that's", 374),
		word("supposed", 375),
		word("to", 376),
		word("mean.", 377),
		word("What", 378),
		word("they", 379),
		word("were", 380)
	),
	div(
		{ class: "line" },
		word("going", 381),
		word("to", 382),
		word("do", 383),
		word("I", 384),
		word("don't", 385),
		word("know—but", 386),
		word("my", 387),
		word("mom", 388)
	),
	div(
		{ class: "line" },
		word("thought", 389),
		word("something", 390),
		word("was", 391),
		word("wrong", 392),
		word("with", 393),
		word("me", 394)
	),
	div(
		{ class: "line" },
		word("anyway,", 395),
		word("especially", 396),
		word("after", 397),
		word("this", 398),
		word("one", 399),
		word("time", 400),
		word("when", 401)
	),
	div(
		{ class: "line" },
		word("I", 402),
		word("called", 403),
		word("my", 404),
		word("basketball", 405),
		word("coach", 406),
		word("an", 407),
		word("asshole", 408),
		word("right", 409)
	),
	div(
		{ class: "line" },
		word("to", 410),
		word("his", 411),
		word("face", 412),
		word("for", 413),
		word("taking", 414),
		word("me", 415),
		word("outta'", 416),
		word("the", 417),
		word("game.", 418)
	)
);
export const page4 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The", 419),
		word("thing", 420),
		word("is,", 421),
		word("I", 422),
		word("couldn't", 423),
		word("help", 424),
		word("it—it", 425),
		word("just", 426),
		word("sorta'", 427)
	),
	div(
		{ class: "line" },
		word("came", 428),
		word("out", 429),
		word("of", 430),
		word("me.", 431),
		word("I", 432),
		word("used", 433),
		word("to", 434),
		word("go", 435),
		word("over", 436),
		word("to", 437),
		word("my", 438)
	),
	div(
		{ class: "line" },
		word("friend", 439),
		word("Justin's", 440),
		word("house", 441),
		word("all", 442),
		word("the", 443),
		word("time—but", 444),
		word("his", 445)
	),
	div(
		{ class: "line" },
		word("dad", 446),
		word("was", 447),
		word("the", 448),
		word("basketball", 449),
		word("coach,", 450),
		word("and", 451),
		word("ever", 452),
		word("since", 453)
	),
	div(
		{ class: "line" },
		word("I", 454),
		word("called", 455),
		word("his", 456),
		word("dad", 457),
		word("an", 458),
		word("asshole,", 459),
		word("I", 460),
		word("haven't", 461),
		word("been", 462)
	),
	div(
		{ class: "line" },
		word("over", 463),
		word("there.", 464),
		word("Justin", 465),
		word("looks", 466),
		word("at", 467),
		word("me", 468),
		word("funny", 469),
		word("in", 470),
		word("school", 471)
	),
	div(
		{ class: "line" },
		word("sometimes,", 472),
		word("like, ’Why'd", 473),
		word("you", 474),
		word("have", 475),
		word("to", 476),
		word("call", 477),
		word("my", 478)
	),
	div(
		{ class: "line" },
		word("dad", 479),
		word("an", 480),
		word("asshole?", 481),
		word("That's", 482),
		word("my", 483),
		word("dad,", 484),
		word("man'—and", 485),
		word("I", 486)
	),
	div(
		{ class: "line" },
		word("feel", 487),
		word("real", 488),
		word("bad", 489),
		word("and", 490),
		word("all,", 491),
		word("but", 492),
		word("like", 493),
		word("I", 494),
		word("said,", 495),
		word("I", 496),
		word("couldn't", 497)
	),
	div(
		{ class: "line" },
		word("help", 498),
		word("it.", 499),
		word("Anyway,", 500),
		word("I", 501),
		word("still", 502),
		word("think", 503),
		word("he", 504),
		word("shouldn't", 505)
	),
	div(
		{ class: "line" },
		word("have", 506),
		word("taken", 507),
		word("me", 508),
		word("outta'", 509),
		word("the", 510),
		word("game.", 511)
	)
);
export const page5 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("My", 512),
		word("mom's", 513),
		word("taking", 514),
		word("me", 515),
		word("to", 516),
		word("the", 517),
		word("hospital", 518),
		word("today", 519)
	),
	div(
		{ class: "line" },
		word("to", 520),
		word("see", 521),
		word("if", 522),
		word("something's", 523),
		word("wrong", 524),
		word("with", 525),
		word("me.", 526),
		word("I", 527),
		word("do", 528)
	),
	div(
		{ class: "line" },
		word("other", 529),
		word("weird", 530),
		word("stuff", 531),
		word("too—like", 532),
		word("stomping", 533),
		word("my", 534),
		word("feet", 535)
	),
	div(
		{ class: "line" },
		word("and", 536),
		word("grunting,", 537),
		word("and", 538),
		word("making", 539),
		word("my", 540),
		word("face", 541),
		word("all", 542)
	),
	div(
		{ class: "line" },
		word("screwed", 543),
		word("up.", 544),
		word("Sometimes", 545),
		word("I", 546),
		word("get", 547),
		word("tired", 548),
		word("of", 549),
		word("it", 550)
	),
	div(
		{ class: "line" },
		word("and", 551),
		word("really", 552),
		word("want", 553),
		word("to", 554),
		word("stop,", 555),
		word("but", 556),
		word("it's", 557),
		word("like", 558),
		word("I", 559),
		word("can't.", 560)
	)
);
export const page6 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("At", 561),
		word("first", 562),
		word("it", 563),
		word("was", 564),
		word("all", 565),
		word("a", 566),
		word("big", 567),
		word("joke—because", 568),
		word("there", 569)
	),
	div(
		{ class: "line" },
		word("was", 570),
		word("this", 571),
		word("one", 572),
		word("guy", 573),
		word("at", 574),
		word("the", 575),
		word("swimming", 576)
	),
	div(
		{ class: "line" },
		word("pool—Crazy", 577),
		word("Charlie—who", 578),
		word("would", 579),
		word("bark", 580),
		word("right", 581)
	),
	div(
		{ class: "line" },
		word("before", 582),
		word("he", 583),
		word("dove", 584),
		word("off", 585),
		word("the", 586),
		word("high", 587),
		word("dive", 588),
		word("and", 589),
		word("into", 590)
	),
	div(
		{ class: "line" },
		word("the", 591),
		word("tank.", 592),
		word("He", 593),
		word("was", 594),
		word("an", 595),
		word("old", 596),
		word("man", 597),
		word("and", 598),
		word("he", 599),
		word("would", 600)
	),
	div(
		{ class: "line" },
		word("do", 601),
		word("that", 602),
		word("same", 603),
		word("damn", 604),
		word("dive", 605),
		word("every", 606),
		word("time,", 607),
		word("like", 608),
		word("he", 609)
	),
	div(
		{ class: "line" },
		word("was", 610),
		word("trying", 611),
		word("out", 612),
		word("for", 613),
		word("the", 614),
		word("Olympics", 615),
		word("or", 616)
	),
	div(
		{ class: "line" },
		word("something—but", 617),
		word("every", 618),
		word("time", 619),
		word("his", 620),
		word("bony", 621),
		word("hands", 622)
	),
	div(
		{ class: "line" },
		word("would", 623),
		word("hit", 624),
		word("the", 625),
		word("water", 626),
		word("palms", 627),
		word("up,", 628),
		word("and", 629),
		word("his", 630),
		word("one", 631)
	),
	div(
		{ class: "line" },
		word("leg", 632),
		word("never", 633),
		word("seemed", 634),
		word("to", 635),
		word("be", 636),
		word("in", 637),
		word("line", 638),
		word("with", 639),
		word("the", 640)
	),
	div(
		{ class: "line" },
		word("other", 641),
		word("one.", 642),
		word("Then", 643),
		word("he'd", 644),
		word("go", 645),
		word("up", 646),
		word("the", 647),
		word("ladder", 648),
		word("doing", 649)
	),
	div(
		{ class: "line" },
		word("these", 650),
		word("weird", 651),
		word("twitches,", 652),
		word("stand", 653),
		word("at", 654),
		word("the", 655),
		word("end", 656),
		word("of", 657)
	),
	div(
		{ class: "line" },
		word("the", 658),
		word("board,", 659),
		word("let", 660),
		word("out", 661),
		word("a", 662),
		word("bark,", 663),
		word("and", 664),
		word("then", 665),
		word("dive", 666)
	),
	div(
		{ class: "line" },
		word("again.", 667),
		word("It", 668),
		word("wasn't", 669),
		word("like", 670),
		word("a", 671),
		word("little", 672),
		word("bark", 673),
		word("either—it", 674)
	),
	div(
		{ class: "line" },
		word("was", 675),
		word("a", 676),
		word("loud", 677),
		word("bark,", 678),
		word("and", 679),
		word("everyone", 680),
		word("always", 681),
		word("heard", 682)
	),
	div(
		{ class: "line" },
		word("it", 683),
		word("and", 684),
		word("would", 685),
		word("look", 686),
		word("up", 687),
		word("at", 688),
		word("his", 689),
		word("old", 690),
		word("ass", 691),
		word("getting", 692)
	),
	div(
		{ class: "line" },
		word("ready", 693),
		word("to", 694),
		word("dive,", 695),
		word("and", 696),
		word("laugh.", 697),
		word("We", 698),
		word("imitated", 699),
		word("him", 700),
		word("a", 701)
	),
	div(
		{ class: "line" },
		word("lot,", 702),
		word("walking", 703),
		word("around", 704),
		word("all", 705),
		word("the", 706),
		word("different", 707),
		word("parts", 708),
		word("of", 709)
	),
	div(
		{ class: "line" },
		word("the", 710),
		word("pool,", 711),
		word("barking", 712),
		word("and", 713),
		word("twitching", 714),
		word("and", 715),
		word("yelling", 716)
	),
	div(
		{ class: "line" },
		word("out", 717),
		word("“Crazy", 718),
		word("Charlie!”,’cause", 719),
		word("a", 720),
		word("lot", 721),
		word("of", 722),
		word("times", 723)
	),
	div(
		{ class: "line" },
		word("Crazy", 724),
		word("Charlie", 725),
		word("himself", 726),
		word("would", 727),
		word("do", 728),
		word("that", 729),
		word("while", 730)
	),
	div(
		{ class: "line" },
		word("he", 731),
		word("was", 732),
		word("walking", 733),
		word("from", 734),
		word("the", 735),
		word("showers", 736),
		word("to", 737),
		word("the", 738)
	),
	div({ class: "line" }, word("diving", 739), word("tank.", 740))
);
export const page7 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Rivi", 741),
		word("is", 742),
		word("the", 743),
		word("name", 744),
		word("of", 745),
		word("the", 746),
		word("pool", 747),
		word("we", 748),
		word("all", 749),
		word("go", 750),
		word("to", 751),
		word("and", 752)
	),
	div(
		{ class: "line" },
		word("I", 753),
		word("spend", 754),
		word("most", 755),
		word("of", 756),
		word("my", 757),
		word("summers", 758),
		word("there,", 759),
		word("except", 760)
	),
	div(
		{ class: "line" },
		word("when", 761),
		word("I'm", 762),
		word("at", 763),
		word("camp.", 764),
		word("It's", 765),
		word("like", 766),
		word("five", 767),
		word("pools", 768),
		word("all", 769),
		word("in", 770)
	),
	div(
		{ class: "line" },
		word("one, ’cause", 771),
		word("there", 772),
		word("are", 773),
		word("special", 774),
		word("parts", 775),
		word("of", 776),
		word("the", 777),
		word("pool", 778)
	),
	div(
		{ class: "line" },
		word("for", 779),
		word("different", 780),
		word("types", 781),
		word("of", 782),
		word("things.", 783),
		word("There's", 784),
		word("the", 785)
	),
	div(
		{ class: "line" },
		word("bullpen,", 786),
		word("which", 787),
		word("is", 788),
		word("my", 789),
		word("favorite,", 790),
		word("where", 791),
		word("only", 792)
	),
	div(
		{ class: "line" },
		word("boys", 793),
		word("are", 794),
		word("allowed.", 795),
		word("If", 796),
		word("a", 797),
		word("girl", 798),
		word("gets", 799),
		word("caught", 800),
		word("in", 801)
	),
	div(
		{ class: "line" },
		word("there", 802),
		word("she", 803),
		word("gets", 804),
		word("thrown", 805),
		word("out,", 806),
		word("and", 807),
		word("can't", 808),
		word("come", 809)
	),
	div(
		{ class: "line" },
		word("back", 810),
		word("for", 811),
		word("a", 812),
		word("day.", 813),
		word("Then", 814),
		word("there's", 815),
		word("the", 816),
		word("six", 817),
		word("foot", 818)
	),
	div(
		{ class: "line" },
		word("where", 819),
		word("all", 820),
		word("the", 821),
		word("codgers", 822),
		word("and", 823),
		word("old", 824),
		word("ladies", 825),
		word("do", 826)
	),
	div(
		{ class: "line" },
		word("laps—the", 827),
		word("jackbox", 828),
		word("where", 829),
		word("most", 830),
		word("of", 831),
		word("the", 832),
		word("girls", 833)
	),
	div(
		{ class: "line" },
		word("hang", 834),
		word("out’cause", 835),
		word("there's", 836),
		word("a", 837),
		word("bar", 838),
		word("there", 839),
		word("where", 840),
		word("they", 841)
	),
	div(
		{ class: "line" },
		word("can", 842),
		word("do", 843),
		word("somersaults", 844),
		word("and", 845),
		word("stuff—and", 846),
		word("finally", 847),
		word("a", 848)
	),
	div(
		{ class: "line" },
		word("baby", 849),
		word("and", 850),
		word("toddler", 851),
		word("pool", 852),
		word("which,", 853),
		word("rumor", 854),
		word("has", 855),
		word("it,", 856)
	),
	div(
		{ class: "line" },
		word("is", 857),
		word("two", 858),
		word("part", 859),
		word("water", 860),
		word("and", 861),
		word("one", 862),
		word("part", 863),
		word("urine.", 864)
	)
);
export const page8 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Anyway,", 865),
		word("it", 866),
		word("was", 867),
		word("Crazy", 868),
		word("Charlie", 869),
		word("that", 870),
		word("got", 871),
		word("me", 872)
	),
	div(
		{ class: "line" },
		word("goin'", 873),
		word("makin'", 874),
		word("all", 875),
		word("these", 876),
		word("weird", 877),
		word("noises—'cause", 878)
	),
	div(
		{ class: "line" },
		word("before", 879),
		word("that", 880),
		word("I", 881),
		word("never", 882),
		word("did", 883),
		word("anything.", 884),
		word("I", 885),
		word("started", 886)
	),
	div(
		{ class: "line" },
		word("makin'", 887),
		word("fun", 888),
		word("of", 889),
		word("him", 890),
		word("like", 891),
		word("everyone", 892),
		word("else,", 893),
		word("and", 894)
	),
	div(
		{ class: "line" },
		word("then", 895),
		word("one", 896),
		word("time", 897),
		word("he", 898),
		word("looked", 899),
		word("at", 900),
		word("me,", 901),
		word("like", 902),
		word("I", 903),
		word("was", 904),
		word("the", 905)
	),
	div(
		{ class: "line" },
		word("one", 906),
		word("who", 907),
		word("started", 908),
		word("all", 909),
		word("of", 910),
		word("it,", 911),
		word("and", 912),
		word("barked", 913),
		word("right", 914),
		word("at", 915)
	),
	div(
		{ class: "line" },
		word("me.", 916),
		word("Well,", 917),
		word("the", 918),
		word("only", 919),
		word("thing", 920),
		word("I", 921),
		word("could", 922),
		word("do", 923),
		word("was", 924),
		word("bark", 925)
	),
	div(
		{ class: "line" },
		word("right", 926),
		word("back,", 927),
		word("and", 928),
		word("when", 929),
		word("I", 930),
		word("did,", 931),
		word("my", 932),
		word("friends", 933),
		word("all", 934)
	),
	div(
		{ class: "line" },
		word("laughed", 935),
		word("real", 936),
		word("hard,", 937),
		word("and", 938),
		word("patted", 939),
		word("me", 940),
		word("on", 941),
		word("the", 942)
	),
	div(
		{ class: "line" },
		word("back", 943),
		word("like", 944),
		word("it", 945),
		word("was", 946),
		word("a", 947),
		word("real", 948),
		word("good", 949),
		word("one", 950),
		word("or", 951),
		word("somethin'.", 952)
	)
);
export const page9 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The", 953),
		word("thing", 954),
		word("that", 955),
		word("I", 956),
		word("remember", 957),
		word("though,", 958),
		word("is", 959),
		word("when", 960)
	),
	div(
		{ class: "line" },
		word("Crazy", 961),
		word("Charlie", 962),
		word("was", 963),
		word("lookin'", 964),
		word("at", 965),
		word("me—it", 966),
		word("was", 967),
		word("like", 968)
	),
	div(
		{ class: "line" },
		word("he", 969),
		word("musta'", 970),
		word("been", 971),
		word("thinking", 972),
		word("of", 973),
		word("how", 974),
		word("either", 975),
		word("he", 976)
	),
	div(
		{ class: "line" },
		word("hoped", 977),
		word("we", 978),
		word("all", 979),
		word("got", 980),
		word("the", 981),
		word("barks", 982),
		word("so", 983),
		word("that", 984),
		word("we", 985),
		word("would", 986)
	),
	div(
		{ class: "line" },
		word("stop", 987),
		word("laughing,", 988),
		word("or", 989),
		word("that", 990),
		word("maybe", 991),
		word("he", 992),
		word("was", 993),
		word("hopin'", 994)
	),
	div(
		{ class: "line" },
		word("that", 995),
		word("we", 996),
		word("would", 997),
		word("never", 998),
		word("get ’em,", 999),
		word("because", 1000),
		word("it", 1001)
	),
	div(
		{ class: "line" },
		word("seemed", 1002),
		word("to", 1003),
		word("bother", 1004),
		word("him", 1005),
		word("a", 1006),
		word("lot.", 1007),
		word("Ever", 1008),
		word("since", 1009),
		word("that", 1010)
	),
	div(
		{ class: "line" },
		word("day", 1011),
		word("I've", 1012),
		word("been", 1013),
		word("doin'", 1014),
		word("the", 1015),
		word("barks", 1016),
		word("and", 1017),
		word("twitches", 1018),
		word("a", 1019)
	),
	div(
		{ class: "line" },
		word("lot,", 1020),
		word("and", 1021),
		word("I", 1022),
		word("think", 1023),
		word("maybe", 1024),
		word("he", 1025),
		word("gave’em", 1026),
		word("to", 1027),
		word("me", 1028)
	),
	div(
		{ class: "line" },
		word("when", 1029),
		word("he", 1030),
		word("looked", 1031),
		word("right", 1032),
		word("at", 1033),
		word("me", 1034),
		word("and", 1035),
		word("I", 1036),
		word("barked", 1037)
	),
	div(
		{ class: "line" },
		word("back", 1038),
		word("at", 1039),
		word("him.", 1040),
		word("My", 1041),
		word("mom", 1042),
		word("says", 1043),
		word("that's", 1044),
		word("ridiculous,", 1045)
	),
	div(
		{ class: "line" },
		word("but", 1046),
		word("she", 1047),
		word("wasn't", 1048),
		word("there", 1049),
		word("to", 1050),
		word("see", 1051),
		word("the", 1052),
		word("look", 1053),
		word("Crazy", 1054)
	),
	div(
		{ class: "line" },
		word("Charlie", 1055),
		word("gave", 1056),
		word("me.", 1057),
		word("It", 1058),
		word("wasn't", 1059),
		word("like", 1060),
		word("an", 1061),
		word("adult", 1062)
	),
	div(
		{ class: "line" },
		word("look—it", 1063),
		word("was", 1064),
		word("the", 1065),
		word("look", 1066),
		word("some", 1067),
		word("kid", 1068),
		word("gives", 1069),
		word("you", 1070)
	),
	div(
		{ class: "line" },
		word("after", 1071),
		word("you've", 1072),
		word("made", 1073),
		word("fun", 1074),
		word("of", 1075),
		word("him,", 1076),
		word("like", 1077),
		word("he", 1078),
		word("really", 1079)
	),
	div(
		{ class: "line" },
		word("hates", 1080),
		word("you,", 1081),
		word("and", 1082),
		word("would", 1083),
		word("like", 1084),
		word("to", 1085),
		word("kill", 1086),
		word("you", 1087),
		word("right", 1088)
	),
	div(
		{ class: "line" },
		word("there", 1089),
		word("on", 1090),
		word("the", 1091),
		word("spot.", 1092)
	)
);
export const page10 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("In", 1093),
		word("the", 1094),
		word("bullpen", 1095),
		word("there's", 1096),
		word("this", 1097),
		word("big", 1098),
		word("guy", 1099),
		word("that", 1100)
	),
	div(
		{ class: "line" },
		word("likes", 1101),
		word("to", 1102),
		word("launch", 1103),
		word("me", 1104),
		word("into", 1105),
		word("the", 1106),
		word("air", 1107),
		word("like", 1108),
		word("a", 1109),
		word("missile.", 1110)
	),
	div(
		{ class: "line" },
		word("That's", 1111),
		word("what", 1112),
		word("they", 1113),
		word("call", 1114),
		word("me", 1115),
		word("and", 1116),
		word("my", 1117),
		word("friends,", 1118)
	),
	div(
		{ class: "line" },
		word("missiles, ’cause", 1119),
		word("they", 1120),
		word("take", 1121),
		word("one", 1122),
		word("of", 1123),
		word("our", 1124),
		word("feet", 1125),
		word("in", 1126)
	),
	div(
		{ class: "line" },
		word("their", 1127),
		word("cupped", 1128),
		word("hands", 1129),
		word("and", 1130),
		word("launch", 1131),
		word("us", 1132),
		word("through", 1133)
	),
	div(
		{ class: "line" },
		word("the", 1134),
		word("air", 1135),
		word("to", 1136),
		word("see", 1137),
		word("how", 1138),
		word("high", 1139),
		word("they", 1140),
		word("can", 1141),
		word("throw", 1142),
		word("us.", 1143)
	),
	div(
		{ class: "line" },
		word("Abe", 1144),
		word("is", 1145),
		word("the", 1146),
		word("best", 1147),
		word("launcher—he's", 1148),
		word("the", 1149),
		word("biggest", 1150)
	),
	div(
		{ class: "line" },
		word("human", 1151),
		word("being", 1152),
		word("I've", 1153),
		word("ever", 1154),
		word("seen,", 1155),
		word("and", 1156),
		word("when", 1157),
		word("he", 1158)
	),
	div(
		{ class: "line" },
		word("launches", 1159),
		word("me", 1160),
		word("I", 1161),
		word("can", 1162),
		word("see", 1163),
		word("over", 1164),
		word("the", 1165),
		word("fence", 1166),
		word("of", 1167),
		word("the", 1168)
	),
	div(
		{ class: "line" },
		word("club", 1169),
		word("all", 1170),
		word("the", 1171),
		word("way", 1172),
		word("to", 1173),
		word("the", 1174),
		word("steeple", 1175),
		word("of", 1176)
	),
	div(
		{ class: "line" },
		word("Meridian", 1177),
		word("Street", 1178),
		word("Methodist", 1179),
		word("Church.", 1180),
		word("My", 1181)
	),
	div(
		{ class: "line" },
		word("friends", 1182),
		word("don't", 1183),
		word("believe", 1184),
		word("me,", 1185),
		word("but", 1186),
		word("it's", 1187),
		word("true—I", 1188)
	),
	div(
		{ class: "line" },
		word("mean,", 1189),
		word("it's", 1190),
		word("not", 1191),
		word("like", 1192),
		word("I", 1193),
		word("can", 1194),
		word("prove", 1195),
		word("it", 1196),
		word("or", 1197)
	),
	div(
		{ class: "line" },
		word("anything—but", 1198),
		word("I", 1199),
		word("can", 1200),
		word("see", 1201),
		word("the", 1202),
		word("steeple,", 1203),
		word("and", 1204),
		word("the", 1205)
	),
	div(
		{ class: "line" },
		word("Baskin", 1206),
		word("Robbins", 1207),
		word("sign", 1208),
		word("right", 1209),
		word("over", 1210),
		word("the", 1211),
		word("canal", 1212)
	),
	div(
		{ class: "line" },
		word("behind", 1213),
		word("Rivi.", 1214),
		word("I'm", 1215),
		word("probably", 1216),
		word("the", 1217),
		word("lightest", 1218),
		word("one", 1219),
		word("out", 1220)
	),
	div(
		{ class: "line" },
		word("of", 1221),
		word("all", 1222),
		word("my", 1223),
		word("friends,", 1224),
		word("and", 1225),
		word("that's", 1226),
		word("why", 1227),
		word("I", 1228),
		word("go", 1229),
		word("the", 1230)
	),
	div(
		{ class: "line" },
		word("highest.", 1231),
		word("The", 1232),
		word("funny", 1233),
		word("thing", 1234),
		word("is", 1235),
		word("though,", 1236),
		word("whenever", 1237)
	),
	div(
		{ class: "line" },
		word("I'm", 1238),
		word("a", 1239),
		word("missile", 1240),
		word("I", 1241),
		word("never", 1242),
		word("get", 1243),
		word("the", 1244),
		word("urge", 1245),
		word("to", 1246),
		word("twitch", 1247),
		word("or", 1248)
	),
	div(
		{ class: "line" },
		word("bark—", 1249),
		word("I", 1250),
		word("guess", 1251),
		word("it's", 1252),
		word("just", 1253),
		word("because", 1254),
		word("I'm", 1255),
		word("too", 1256),
		word("busy", 1257)
	),
	div(
		{ class: "line" },
		word("worrying", 1258),
		word("about", 1259),
		word("the", 1260),
		word("flips", 1261),
		word("and", 1262),
		word("somersaults", 1263)
	),
	div(
		{ class: "line" },
		word("that", 1264),
		word("I'm", 1265),
		word("gonna'", 1266),
		word("do.", 1267),
		word("One", 1268),
		word("time", 1269),
		word("when", 1270),
		word("Abe", 1271)
	),
	div(
		{ class: "line" },
		word("launched", 1272),
		word("me", 1273),
		word("I", 1274),
		word("did", 1275),
		word("three", 1276),
		word("somersaults", 1277),
		word("before", 1278),
		word("I", 1279)
	),
	div(
		{ class: "line" },
		word("straightened", 1280),
		word("out", 1281),
		word("for", 1282),
		word("a", 1283),
		word("perfect", 1284),
		word("dive", 1285),
		word("into", 1286),
		word("the", 1287)
	),
	div(
		{ class: "line" },
		word("water.", 1288),
		word("I'm", 1289),
		word("thinking", 1290),
		word("I'll", 1291),
		word("tell", 1292),
		word("this", 1293),
		word("to", 1294),
		word("that", 1295),
		word("doctor", 1296)
	),
	div(
		{ class: "line" },
		word("I'm", 1297),
		word("gonna'", 1298),
		word("see", 1299),
		word("today,", 1300),
		word("since", 1301),
		word("that", 1302),
		word("is", 1303),
		word("practically", 1304)
	),
	div(
		{ class: "line" },
		word("the", 1305),
		word("only", 1306),
		word("time", 1307),
		word("that", 1308),
		word("I", 1309),
		word("don't", 1310),
		word("do", 1311),
		word("it.", 1312)
	)
);
export const page11 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("On", 1313),
		word("the", 1314),
		word("way", 1315),
		word("to", 1316),
		word("Riley", 1317),
		word("Hospital", 1318),
		word("my", 1319),
		word("mom", 1320),
		word("keeps", 1321)
	),
	div(
		{ class: "line" },
		word("tellin'", 1322),
		word("me", 1323),
		word("that", 1324),
		word("it's", 1325),
		word("not", 1326),
		word("a", 1327),
		word("psychiatrist", 1328),
		word("that", 1329),
		word("I'm", 1330)
	),
	div(
		{ class: "line" },
		word("gonna'", 1331),
		word("see—but", 1332),
		word("a", 1333),
		word("neurologist,", 1334),
		word("whatever", 1335),
		word("the", 1336)
	),
	div(
		{ class: "line" },
		word("hell", 1337),
		word("that's", 1338),
		word("supposed", 1339),
		word("to", 1340),
		word("be.", 1341),
		word("She", 1342),
		word("knows", 1343),
		word("that", 1344),
		word("I", 1345)
	),
	div(
		{ class: "line" },
		word("don't", 1346),
		word("like", 1347),
		word("crazy", 1348),
		word("people,", 1349),
		word("and", 1350),
		word("that", 1351),
		word("they", 1352),
		word("are", 1353),
		word("the", 1354)
	),
	div(
		{ class: "line" },
		word("only", 1355),
		word("people", 1356),
		word("who", 1357),
		word("truly", 1358),
		word("scare", 1359),
		word("me—more", 1360),
		word("than", 1361)
	),
	div(
		{ class: "line" },
		word("the", 1362),
		word("weird", 1363),
		word("things", 1364),
		word("I", 1365),
		word("hear", 1366),
		word("in", 1367),
		word("my", 1368),
		word("room", 1369),
		word("at", 1370),
		word("night", 1371)
	),
	div(
		{ class: "line" },
		word("when", 1372),
		word("I'm", 1373),
		word("praying", 1374),
		word("to", 1375),
		word("Jesus", 1376),
		word("to", 1377),
		word("protect", 1378),
		word("me", 1379),
		word("from", 1380)
	),
	div(
		{ class: "line" },
		word("them.", 1381),
		word("I", 1382),
		word("remember", 1383),
		word("I", 1384),
		word("used", 1385),
		word("to", 1386),
		word("be", 1387),
		word("really", 1388),
		word("scared", 1389)
	),
	div(
		{ class: "line" },
		word("of", 1390),
		word("them", 1391),
		word("when", 1392),
		word("I", 1393),
		word("was", 1394),
		word("little,", 1395),
		word("at", 1396),
		word("least", 1397),
		word("until", 1398),
		word("I", 1399),
		word("got", 1400)
	),
	div(
		{ class: "line" },
		word("my", 1401),
		word("first", 1402),
		word("communion", 1403),
		word("at", 1404),
		word("church.", 1405),
		word("After", 1406),
		word("that", 1407),
		word("I", 1408)
	),
	div(
		{ class: "line" },
		word("figured", 1409),
		word("I", 1410),
		word("was", 1411),
		word("off", 1412),
		word("limits", 1413),
		word("to", 1414),
		word("the", 1415),
		word("monsters", 1416),
		word("since", 1417)
	),
	div(
		{ class: "line" },
		word("I", 1418),
		word("ate", 1419),
		word("holy", 1420),
		word("wafers", 1421),
		word("on", 1422),
		word("a", 1423),
		word("weekly", 1424),
		word("basis.", 1425),
		word("But", 1426),
		word("Crazy", 1427)
	),
	div(
		{ class: "line" },
		word("Charlie", 1428),
		word("doesn't", 1429),
		word("count", 1430),
		word("as", 1431),
		word("a", 1432),
		word("crazy", 1433),
		word("person", 1434),
		word("to", 1435)
	),
	div(
		{ class: "line" },
		word("me—because", 1436),
		word("it's", 1437),
		word("not", 1438),
		word("like", 1439),
		word("he's", 1440),
		word("a", 1441),
		word("psycho", 1442),
		word("or", 1443)
	),
	div(
		{ class: "line" },
		word("anything,", 1444),
		word("he", 1445),
		word("just", 1446),
		word("does", 1447),
		word("funny", 1448),
		word("twitches", 1449),
		word("and", 1450)
	),
	div(
		{ class: "line" },
		word("weird", 1451),
		word("noises—not", 1452),
		word("like", 1453),
		word("the", 1454),
		word("guys", 1455),
		word("downtown", 1456)
	),
	div(
		{ class: "line" },
		word("who", 1457),
		word("talk", 1458),
		word("to", 1459),
		word("themselves", 1460),
		word("and", 1461),
		word("look", 1462),
		word("like", 1463),
		word("they're", 1464)
	),
	div(
		{ class: "line" },
		word("about", 1465),
		word("to", 1466),
		word("kill", 1467),
		word("somebody", 1468),
		word("or", 1469),
		word("somethin'.", 1470),
		word("Those", 1471)
	),
	div(
		{ class: "line" },
		word("guys", 1472),
		word("are", 1473),
		word("creepy,", 1474),
		word("and", 1475),
		word("I", 1476),
		word("try", 1477),
		word("clear", 1478),
		word("of", 1479),
		word("them", 1480)
	),
	div(
		{ class: "line" },
		word("whenever", 1481),
		word("me", 1482),
		word("and", 1483),
		word("my", 1484),
		word("mom", 1485),
		word("go", 1486),
		word("downtown", 1487),
		word("to", 1488)
	),
	div(
		{ class: "line" },
		word("the", 1489),
		word("post", 1490),
		word("office.", 1491)
	)
);
export const page12 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("When", 1492),
		word("we", 1493),
		word("get", 1494),
		word("to", 1495),
		word("the", 1496),
		word("hospital", 1497),
		word("I", 1498),
		word("have", 1499),
		word("to", 1500),
		word("sit", 1501),
		word("in", 1502)
	),
	div(
		{ class: "line" },
		word("this", 1503),
		word("waiting", 1504),
		word("room", 1505),
		word("that", 1506),
		word("is", 1507),
		word("made", 1508),
		word("for", 1509),
		word("little", 1510)
	),
	div(
		{ class: "line" },
		word("kids—there", 1511),
		word("is", 1512),
		word("a", 1513),
		word("box", 1514),
		word("of", 1515),
		word("toys", 1516),
		word("and", 1517),
		word("a", 1518),
		word("pile", 1519),
		word("of", 1520)
	),
	div(
		{ class: "line" },
		word("children's", 1521),
		word("books.", 1522),
		word("I'm", 1523),
		word("gettin'", 1524),
		word("sorta'", 1525),
		word("nervous", 1526)
	),
	div(
		{ class: "line" },
		word("though,", 1527),
		word("because", 1528),
		word("my", 1529),
		word("mom", 1530),
		word("says", 1531),
		word("I", 1532),
		word("might", 1533),
		word("have", 1534)
	),
	div(
		{ class: "line" },
		word("this", 1535),
		word("disease,", 1536),
		word("and", 1537),
		word("I", 1538),
		word("don't", 1539),
		word("want", 1540),
		word("to", 1541),
		word("have", 1542),
		word("it.", 1543),
		word("I", 1544)
	),
	div(
		{ class: "line" },
		word("figure", 1545),
		word("that", 1546),
		word("if", 1547),
		word("I", 1548),
		word("can", 1549),
		word("stop", 1550),
		word("twitching", 1551),
		word("while", 1552),
		word("I'm", 1553)
	),
	div(
		{ class: "line" },
		word("with", 1554),
		word("the", 1555),
		word("doctor,", 1556),
		word("that", 1557),
		word("he", 1558),
		word("won't", 1559),
		word("think", 1560),
		word("I", 1561),
		word("have", 1562),
		word("it.", 1563)
	),
	div(
		{ class: "line" },
		word("I", 1564),
		word("mean,", 1565),
		word("I", 1566),
		word("don't", 1567),
		word("really", 1568),
		word("care", 1569),
		word("if", 1570),
		word("I", 1571),
		word("have", 1572),
		word("it—but", 1573),
		word("my", 1574)
	),
	div(
		{ class: "line" },
		word("mom,", 1575),
		word("she", 1576),
		word("gets", 1577),
		word("all", 1578),
		word("worried", 1579),
		word("about", 1580),
		word("it,", 1581),
		word("like", 1582),
		word("that", 1583)
	),
	div(
		{ class: "line" },
		word("one", 1584),
		word("time", 1585),
		word("she", 1586),
		word("cried", 1587),
		word("when", 1588),
		word("my", 1589),
		word("teachers", 1590),
		word("at", 1591)
	),
	div(
		{ class: "line" },
		word("school", 1592),
		word("said", 1593),
		word("they", 1594),
		word("might", 1595),
		word("take", 1596),
		word("further", 1597)
	),
	div(
		{ class: "line" },
		word("action,", 1598),
		word("and,", 1599),
		word("there's", 1600),
		word("one", 1601),
		word("thing", 1602),
		word("in", 1603),
		word("the", 1604),
		word("world", 1605)
	),
	div(
		{ class: "line" },
		word("that", 1606),
		word("I", 1607),
		word("can't", 1608),
		word("stand,", 1609),
		word("and", 1610),
		word("that's", 1611),
		word("my", 1612),
		word("mom", 1613),
		word("crying.", 1614)
	),
	div(
		{ class: "line" },
		word("It's", 1615),
		word("like", 1616),
		word("I", 1617),
		word("have", 1618),
		word("to", 1619),
		word("cry", 1620),
		word("just", 1621),
		word("because", 1622),
		word("my", 1623),
		word("mom's", 1624)
	),
	div(
		{ class: "line" },
		word("crying.", 1625),
		word("I", 1626),
		word("don't", 1627),
		word("even", 1628),
		word("have", 1629),
		word("to", 1630),
		word("know", 1631),
		word("what", 1632),
		word("it's", 1633)
	),
	div(
		{ class: "line" },
		word("about—I", 1634),
		word("start", 1635),
		word("in", 1636),
		word("right", 1637),
		word("along", 1638),
		word("with", 1639),
		word("her,", 1640),
		word("and", 1641)
	),
	div(
		{ class: "line" },
		word("ask", 1642),
		word("her", 1643),
		word("why", 1644),
		word("she", 1645),
		word("has", 1646),
		word("to", 1647),
		word("bawl", 1648),
		word("when", 1649),
		word("she", 1650)
	),
	div(
		{ class: "line" },
		word("knows", 1651),
		word("it", 1652),
		word("makes", 1653),
		word("me", 1654),
		word("sad.", 1655)
	)
);
export const page13 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("So", 1656),
		word("anyway,", 1657),
		word("I'm", 1658),
		word("not", 1659),
		word("a", 1660),
		word("cry-baby", 1661),
		word("or", 1662),
		word("anything,", 1663)
	),
	div(
		{ class: "line" },
		word("it's", 1664),
		word("just", 1665),
		word("that", 1666),
		word("one", 1667),
		word("thing", 1668),
		word("that", 1669),
		word("does", 1670),
		word("it", 1671),
		word("to", 1672),
		word("me", 1673)
	),
	div(
		{ class: "line" },
		word("every", 1674),
		word("time.", 1675),
		word("So", 1676),
		word("I'm", 1677),
		word("thinking", 1678),
		word("I'll", 1679),
		word("hold", 1680),
		word("in", 1681),
		word("the", 1682)
	),
	div(
		{ class: "line" },
		word("urges", 1683),
		word("to", 1684),
		word("bark", 1685),
		word("and", 1686),
		word("twitch", 1687),
		word("for", 1688),
		word("at", 1689),
		word("least", 1690),
		word("a", 1691),
		word("few", 1692)
	),
	div(
		{ class: "line" },
		word("minutes", 1693),
		word("while", 1694),
		word("the", 1695),
		word("doctor's", 1696),
		word("seein'", 1697),
		word("me.", 1698),
		word("That", 1699)
	),
	div(
		{ class: "line" },
		word("way", 1700),
		word("he", 1701),
		word("won't", 1702),
		word("think", 1703),
		word("I", 1704),
		word("have", 1705),
		word("it,", 1706),
		word("and", 1707),
		word("my", 1708),
		word("mom", 1709)
	),
	div(
		{ class: "line" },
		word("won't", 1710),
		word("have", 1711),
		word("anything", 1712),
		word("to", 1713),
		word("get", 1714),
		word("all", 1715)
	),
	div({ class: "line" }, word("worked-up", 1716), word("about.", 1717))
);
export const page14 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("But", 1718),
		word("in", 1719),
		word("the", 1720),
		word("waiting", 1721),
		word("room", 1722),
		word("I'm", 1723),
		word("really", 1724),
		word("going", 1725),
		word("at", 1726),
		word("it", 1727)
	),
	div(
		{ class: "line" },
		word("since", 1728),
		word("the", 1729),
		word("doctor's", 1730),
		word("nowhere", 1731),
		word("in", 1732),
		word("sight.", 1733),
		word("I", 1734),
		word("pick", 1735),
		word("up", 1736)
	),
	div(
		{ class: "line" },
		word("this", 1737),
		word("book", 1738),
		word("I", 1739),
		word("remember", 1740),
		word("having", 1741),
		word("when", 1742),
		word("I", 1743),
		word("was", 1744),
		word("a", 1745)
	),
	div(
		{ class: "line" },
		word("kid,", 1746),
		word("The", 1747),
		word("Cat", 1748),
		word("In", 1749),
		word("The", 1750),
		word("Hat,", 1751),
		word("and", 1752),
		word("start", 1753),
		word("reading", 1754),
		word("it", 1755)
	),
	div(
		{ class: "line" },
		word("to", 1756),
		word("get", 1757),
		word("my", 1758),
		word("mind", 1759),
		word("off", 1760),
		word("the", 1761),
		word("whole", 1762),
		word("situation.", 1763)
	),
	div(
		{ class: "line" },
		word("Only", 1764),
		word("the", 1765),
		word("urges", 1766),
		word("are", 1767),
		word("really", 1768),
		word("coming", 1769),
		word("at", 1770),
		word("me", 1771),
		word("now,", 1772)
	),
	div(
		{ class: "line" },
		word("since", 1773),
		word("I've", 1774),
		word("got", 1775),
		word("this", 1776),
		word("great", 1777),
		word("plan", 1778),
		word("to", 1779),
		word("hold’em", 1780),
		word("all", 1781)
	),
	div(
		{ class: "line" },
		word("in", 1782),
		word("when", 1783),
		word("the", 1784),
		word("doctor", 1785),
		word("shows", 1786),
		word("up.", 1787),
		word("I'm", 1788),
		word("flipping", 1789)
	),
	div(
		{ class: "line" },
		word("my", 1790),
		word("head", 1791),
		word("back", 1792),
		word("and", 1793),
		word("forth", 1794),
		word("and", 1795),
		word("can", 1796),
		word("barely", 1797)
	),
	div(
		{ class: "line" },
		word("even", 1798),
		word("read—I'm", 1799),
		word("stomping", 1800),
		word("my", 1801),
		word("feet,", 1802)
	),
	div(
		{ class: "line" },
		word("trying", 1803),
		word("to", 1804),
		word("get", 1805),
		word("my", 1806),
		word("toes", 1807),
		word("through", 1808),
		word("the", 1809),
		word("soles", 1810),
		word("of", 1811)
	),
	div(
		{ class: "line" },
		word("my", 1812),
		word("shoes.", 1813),
		word("If", 1814),
		word("I", 1815),
		word("could,", 1816),
		word("I'd", 1817),
		word("curl", 1818),
		word("my", 1819),
		word("toes", 1820),
		word("right", 1821)
	),
	div(
		{ class: "line" },
		word("through", 1822),
		word("the", 1823),
		word("carpet", 1824),
		word("and", 1825),
		word("into", 1826),
		word("the", 1827),
		word("floor", 1828)
	),
	div(
		{ class: "line" },
		word("underneath.", 1829),
		word("I'm", 1830),
		word("grunting", 1831),
		word("every", 1832),
		word("other", 1833),
		word("second,", 1834)
	),
	div(
		{ class: "line" },
		word("louder", 1835),
		word("each", 1836),
		word("time,", 1837),
		word("and", 1838),
		word("can't", 1839),
		word("seem", 1840),
		word("to", 1841),
		word("get", 1842)
	),
	div({ class: "line" }, word("it", 1843), word("right.", 1844))
);
export const page15 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("That's", 1845),
		word("the", 1846),
		word("thing", 1847),
		word("about", 1848),
		word("it—it's", 1849),
		word("like", 1850),
		word("once", 1851)
	),
	div(
		{ class: "line" },
		word("you", 1852),
		word("start", 1853),
		word("in", 1854),
		word("on", 1855),
		word("it,", 1856),
		word("you've", 1857),
		word("got", 1858),
		word("to", 1859),
		word("get", 1860),
		word("it", 1861),
		word("right.", 1862)
	),
	div(
		{ class: "line" },
		word("Just", 1863),
		word("like", 1864),
		word("Crazy", 1865),
		word("Charlie", 1866),
		word("and", 1867),
		word("his", 1868),
		word("Olympic", 1869)
	),
	div(
		{ class: "line" },
		word("dives—if", 1870),
		word("it's", 1871),
		word("off", 1872),
		word("by", 1873),
		word("just", 1874),
		word("a", 1875),
		word("little", 1876),
		word("bit", 1877),
		word("you've", 1878),
		word("got", 1879)
	),
	div(
		{ class: "line" },
		word("to", 1880),
		word("do", 1881),
		word("it", 1882),
		word("again.", 1883),
		word("Especially", 1884),
		word("with", 1885),
		word("the", 1886),
		word("barks—at", 1887)
	),
	div(
		{ class: "line" },
		word("first", 1888),
		word("everyone", 1889),
		word("can", 1890),
		word("barely", 1891),
		word("hear", 1892),
		word("it,", 1893),
		word("but", 1894),
		word("then", 1895),
		word("I", 1896)
	),
	div(
		{ class: "line" },
		word("think", 1897),
		word("that", 1898),
		word("they", 1899),
		word("didn't", 1900),
		word("hear", 1901),
		word("it,", 1902),
		word("and", 1903),
		word("so", 1904),
		word("I", 1905),
		word("have", 1906)
	),
	div(
		{ class: "line" },
		word("to", 1907),
		word("do", 1908),
		word("it", 1909),
		word("again—but", 1910),
		word("then", 1911),
		word("I", 1912),
		word("think", 1913),
		word("that", 1914),
		word("surely", 1915)
	),
	div(
		{ class: "line" },
		word("they", 1916),
		word("didn't", 1917),
		word("hear", 1918),
		word("that", 1919),
		word("one", 1920),
		word("either,", 1921),
		word("and", 1922),
		word("so", 1923),
		word("on,", 1924)
	),
	div(
		{ class: "line" },
		word("until", 1925),
		word("the", 1926),
		word("whole", 1927),
		word("class", 1928),
		word("is", 1929),
		word("staring", 1930),
		word("at", 1931),
		word("me", 1932),
		word("and", 1933),
		word("I'm", 1934)
	),
	div(
		{ class: "line" },
		word("yanked", 1935),
		word("outta'", 1936),
		word("the", 1937),
		word("class", 1938),
		word("by", 1939),
		word("Sister", 1940),
		word("Agatha", 1941),
		word("and", 1942)
	),
	div(
		{ class: "line" },
		word("sent", 1943),
		word("to", 1944),
		word("the", 1945),
		word("principal's", 1946),
		word("office.", 1947)
	)
);
export const page16 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I", 1948),
		word("don't", 1949),
		word("really", 1950),
		word("wanna'", 1951),
		word("look", 1952),
		word("up", 1953),
		word("at", 1954),
		word("my", 1955),
		word("mom", 1956)
	),
	div(
		{ class: "line" },
		word("now,", 1957),
		word("’cause", 1958),
		word("I'm", 1959),
		word("really", 1960),
		word("having", 1961),
		word("a", 1962),
		word("fit,", 1963),
		word("but", 1964),
		word("when", 1965),
		word("I", 1966)
	),
	div(
		{ class: "line" },
		word("do", 1967),
		word("she", 1968),
		word("is", 1969),
		word("just", 1970),
		word("staring", 1971),
		word("at", 1972),
		word("me", 1973),
		word("like", 1974),
		word("she", 1975),
		word("usually", 1976)
	),
	div(
		{ class: "line" },
		word("does,", 1977),
		word("smiling,", 1978),
		word("like", 1979),
		word("what", 1980),
		word("I'm", 1981),
		word("doing", 1982),
		word("is", 1983),
		word("the", 1984),
		word("most", 1985)
	),
	div(
		{ class: "line" },
		word("normal", 1986),
		word("thing", 1987),
		word("in", 1988),
		word("the", 1989),
		word("world.", 1990)
	)
);
export const page17 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Luckily", 1991),
		word("there's", 1992),
		word("no", 1993),
		word("one", 1994),
		word("else", 1995),
		word("in", 1996),
		word("the", 1997)
	),
	div(
		{ class: "line" },
		word("room—I", 1998),
		word("mean,", 1999),
		word("if", 2000),
		word("there", 2001),
		word("was", 2002),
		word("a", 2003),
		word("little", 2004),
		word("kid", 2005),
		word("in", 2006),
		word("the", 2007)
	),
	div(
		{ class: "line" },
		word("room", 2008),
		word("I'd", 2009),
		word("really", 2010),
		word("be", 2011),
		word("feelin'", 2012),
		word("stupid—'cause", 2013)
	),
	div(
		{ class: "line" },
		word("sometimes", 2014),
		word("little", 2015),
		word("kids", 2016),
		word("look", 2017),
		word("at", 2018),
		word("me", 2019),
		word("and", 2020),
		word("then", 2021),
		word("go", 2022)
	),
	div(
		{ class: "line" },
		word("over", 2023),
		word("to", 2024),
		word("their", 2025),
		word("mom", 2026),
		word("like", 2027),
		word("they're", 2028),
		word("afraid", 2029),
		word("of", 2030),
		word("me", 2031)
	),
	div({ class: "line" }, word("or", 2032), word("somethin'.", 2033))
);
export const page18 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The", 2034),
		word("urges", 2035),
		word("are", 2036),
		word("coming", 2037),
		word("from", 2038),
		word("all", 2039),
		word("over,", 2040),
		word("and", 2041),
		word("I", 2042)
	),
	div(
		{ class: "line" },
		word("can't", 2043),
		word("remember", 2044),
		word("when", 2045),
		word("I've", 2046),
		word("been", 2047),
		word("so", 2048),
		word("bad", 2049),
		word("with", 2050)
	),
	div(
		{ class: "line" },
		word("it—but", 2051),
		word("then", 2052),
		word("the", 2053),
		word("doctor", 2054),
		word("comes", 2055),
		word("in", 2056),
		word("and", 2057)
	),
	div(
		{ class: "line" },
		word("introduces", 2058),
		word("himself", 2059),
		word("to", 2060),
		word("me,", 2061),
		word("and", 2062),
		word("not", 2063),
		word("to", 2064),
		word("my", 2065)
	),
	div(
		{ class: "line" },
		word("mom,", 2066),
		word("which", 2067),
		word("I", 2068),
		word("think", 2069),
		word("is", 2070),
		word("sorta'", 2071),
		word("weird", 2072),
		word("since", 2073),
		word("she", 2074),
		word("is", 2075)
	),
	div(
		{ class: "line" },
		word("right", 2076),
		word("there", 2077),
		word("next", 2078),
		word("to", 2079),
		word("me.", 2080),
		word("Adults", 2081),
		word("are", 2082),
		word("always", 2083)
	),
	div(
		{ class: "line" },
		word("doin'", 2084),
		word("weird", 2085),
		word("stuff", 2086),
		word("like", 2087),
		word("that", 2088),
		word("when", 2089),
		word("I'm", 2090),
		word("around.", 2091)
	),
	div(
		{ class: "line" },
		word("They're", 2092),
		word("always", 2093),
		word("taking", 2094),
		word("me", 2095),
		word("aside", 2096),
		word("and", 2097),
		word("asking,", 2098)
	),
	div(
		{ class: "line" },
		word("“How", 2099),
		word("are", 2100),
		word("you,", 2101),
		word("Brandt?", 2102),
		word("Is", 2103),
		word("everything", 2104),
		word("okay?“", 2105)
	),
	div(
		{ class: "line" },
		word("like", 2106),
		word("I'm", 2107),
		word("some", 2108),
		word("kind", 2109),
		word("of", 2110),
		word("retard", 2111),
		word("or", 2112),
		word("something.", 2113)
	),
	div(
		{ class: "line" },
		word("Not", 2114),
		word("that", 2115),
		word("I", 2116),
		word("have", 2117),
		word("anything", 2118),
		word("against", 2119),
		word("retards,", 2120)
	),
	div(
		{ class: "line" },
		word("but", 2121),
		word("it's", 2122),
		word("like", 2123),
		word("I'm", 2124),
		word("not", 2125),
		word("retarded—I", 2126),
		word("just", 2127),
		word("twitch", 2128)
	),
	div(
		{ class: "line" },
		word("and", 2129),
		word("stuff,", 2130),
		word("which", 2131),
		word("isn't", 2132),
		word("the", 2133),
		word("same", 2134),
		word("thing", 2135),
		word("at", 2136),
		word("all.", 2137)
	),
	div(
		{ class: "line" },
		word("Just", 2138),
		word("like", 2139),
		word("Crazy", 2140),
		word("Charlie", 2141),
		word("really", 2142),
		word("isn't", 2143),
		word("crazy.", 2144)
	)
);
export const page19 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The", 2145),
		word("doctor", 2146),
		word("asks", 2147),
		word("me", 2148),
		word("to", 2149),
		word("follow", 2150),
		word("him", 2151),
		word("down", 2152),
		word("the", 2153),
		word("hall", 2154)
	),
	div(
		{ class: "line" },
		word("to", 2155),
		word("his", 2156),
		word("office", 2157),
		word("where", 2158),
		word("we", 2159),
		word("can", 2160),
		word("talk,", 2161),
		word("and", 2162),
		word("I'm", 2163)
	),
	div(
		{ class: "line" },
		word("waiting", 2164),
		word("for", 2165),
		word("my", 2166),
		word("mom", 2167),
		word("to", 2168),
		word("come", 2169),
		word("with", 2170),
		word("us", 2171),
		word("but", 2172)
	),
	div(
		{ class: "line" },
		word("she", 2173),
		word("stays", 2174),
		word("behind.", 2175),
		word("The", 2176),
		word("doctor", 2177),
		word("tells", 2178),
		word("me", 2179),
		word("he", 2180),
		word("just", 2181)
	),
	div(
		{ class: "line" },
		word("wants", 2182),
		word("to", 2183),
		word("talk", 2184),
		word("to", 2185),
		word("me", 2186),
		word("for", 2187),
		word("a", 2188),
		word("minute.", 2189),
		word("We're", 2190)
	),
	div(
		{ class: "line" },
		word("walking", 2191),
		word("down", 2192),
		word("the", 2193),
		word("hall", 2194),
		word("and", 2195),
		word("I'm", 2196),
		word("really", 2197),
		word("about", 2198)
	),
	div(
		{ class: "line" },
		word("to", 2199),
		word("explode’", 2200),
		word("cause", 2201),
		word("it's", 2202),
		word("like", 2203),
		word("there's", 2204),
		word("all", 2205),
		word("this", 2206)
	),
	div(
		{ class: "line" },
		word("energy", 2207),
		word("going", 2208),
		word("through", 2209),
		word("me", 2210),
		word("like", 2211),
		word("I've", 2212),
		word("just", 2213),
		word("been", 2214)
	),
	div(
		{ class: "line" },
		word("electrocuted—not", 2215),
		word("that", 2216),
		word("I've", 2217),
		word("ever", 2218),
		word("been", 2219)
	),
	div(
		{ class: "line" },
		word("electrocuted", 2220),
		word("before,", 2221),
		word("but", 2222),
		word("I'm", 2223),
		word("thinking", 2224),
		word("this", 2225),
		word("is", 2226)
	),
	div(
		{ class: "line" },
		word("what", 2227),
		word("it", 2228),
		word("would", 2229),
		word("feel", 2230),
		word("like", 2231),
		word("if", 2232),
		word("I", 2233),
		word("was.", 2234),
		word("I'm", 2235),
		word("sweating", 2236)
	),
	div(
		{ class: "line" },
		word("by", 2237),
		word("the", 2238),
		word("time", 2239),
		word("we", 2240),
		word("make", 2241),
		word("it", 2242),
		word("to", 2243),
		word("his", 2244),
		word("office,", 2245),
		word("which", 2246),
		word("is", 2247)
	),
	div(
		{ class: "line" },
		word("like", 2248),
		word("ten", 2249),
		word("miles", 2250),
		word("down", 2251),
		word("the", 2252),
		word("hall,", 2253),
		word("and", 2254),
		word("he", 2255),
		word("asks", 2256),
		word("me", 2257)
	),
	div(
		{ class: "line" },
		word("again", 2258),
		word("if", 2259),
		word("everything's", 2260),
		word("all", 2261),
		word("right.", 2262)
	)
);
export const page20 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“I'm", 2263),
		word("fine,”", 2264),
		word("I", 2265),
		word("say.", 2266)
	)
);
export const page21 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“And", 2267),
		word("are", 2268),
		word("you", 2269),
		word("holding", 2270),
		word("back", 2271),
		word("on", 2272),
		word("anything?", 2273)
	),
	div(
		{ class: "line" },
		word("Is", 2274),
		word("this", 2275),
		word("how", 2276),
		word("you", 2277),
		word("usually", 2278),
		word("act?“", 2279),
		word("he", 2280),
		word("asks.", 2281)
	)
);
export const page22 = section({ class: "page" }, div({}, word("“Yes.”", 2282)));
export const page23 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“Are", 2283),
		word("you", 2284),
		word("feeling", 2285),
		word("the", 2286),
		word("urge", 2287),
		word("to", 2288),
		word("make", 2289),
		word("noises,", 2290),
		word("or", 2291)
	),
	div(
		{ class: "line" },
		word("shake", 2292),
		word("your", 2293),
		word("head?”", 2294)
	)
);
export const page24 = section({ class: "page" }, div({}, word("“No.”", 2295)));
export const page25 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“Anything", 2296),
		word("like", 2297),
		word("that?”", 2298)
	)
);
export const page26 = section({ class: "page" }, div({}, word("“No.”", 2299)));
export const page27 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Only", 2300),
		word("inside", 2301),
		word("I'm", 2302),
		word("fighting", 2303),
		word("the", 2304),
		word("itches", 2305),
		word("like", 2306),
		word("a", 2307)
	),
	div(
		{ class: "line" },
		word("madman,", 2308),
		word("and", 2309),
		word("think", 2310),
		word("maybe", 2311),
		word("I'm", 2312),
		word("not", 2313),
		word("going", 2314),
		word("to", 2315)
	),
	div({ class: "line" }, word("make", 2316), word("it.", 2317))
);
export const page28 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“It's", 2318),
		word("just", 2319),
		word("sorta'", 2320),
		word("hot", 2321),
		word("in", 2322),
		word("here,", 2323),
		word("that's", 2324),
		word("all,”", 2325),
		word("I", 2326),
		word("say,", 2327)
	),
	div(
		{ class: "line" },
		word("’cause", 2328),
		word("I'm", 2329),
		word("thinking", 2330),
		word("he", 2331),
		word("can", 2332),
		word("see", 2333),
		word("me", 2334),
		word("sweating.", 2335)
	)
);
export const page29 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("He", 2336),
		word("says", 2337),
		word("then", 2338),
		word("that", 2339),
		word("that's", 2340),
		word("all", 2341),
		word("he", 2342),
		word("wanted", 2343),
		word("to", 2344)
	),
	div(
		{ class: "line" },
		word("know", 2345),
		word("and", 2346),
		word("takes", 2347),
		word("me", 2348),
		word("back", 2349),
		word("to", 2350),
		word("my", 2351),
		word("mom.", 2352),
		word("They", 2353)
	),
	div(
		{ class: "line" },
		word("are", 2354),
		word("talking", 2355),
		word("right", 2356),
		word("there", 2357),
		word("in", 2358),
		word("front", 2359),
		word("of", 2360),
		word("me,", 2361),
		word("and", 2362)
	),
	div(
		{ class: "line" },
		word("just", 2363),
		word("when", 2364),
		word("I", 2365),
		word("think", 2366),
		word("he's", 2367),
		word("gonna'", 2368),
		word("let", 2369),
		word("us", 2370),
		word("go", 2371),
		word("he", 2372),
		word("asks", 2373)
	),
	div(
		{ class: "line" },
		word("me", 2374),
		word("to", 2375),
		word("go", 2376),
		word("down", 2377),
		word("to", 2378),
		word("the", 2379),
		word("drinking", 2380),
		word("fountain", 2381),
		word("to", 2382)
	),
	div(
		{ class: "line" },
		word("get", 2383),
		word("a", 2384),
		word("sip", 2385),
		word("of", 2386),
		word("water.", 2387)
	)
);
export const page30 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“I'm", 2388),
		word("not", 2389),
		word("thirsty,”", 2390),
		word("I", 2391),
		word("tell", 2392),
		word("him.", 2393)
	)
);
export const page31 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“Go", 2394),
		word("on", 2395),
		word("anyway,", 2396),
		word("I", 2397),
		word("have", 2398),
		word("to", 2399),
		word("talk", 2400),
		word("to", 2401),
		word("your", 2402)
	),
	div(
		{ class: "line" },
		word("mother", 2403),
		word("for", 2404),
		word("a", 2405),
		word("minute,”", 2406),
		word("he", 2407),
		word("says.", 2408)
	)
);
export const page32 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("And", 2409),
		word("I'm", 2410),
		word("thinking,", 2411),
		word("yeah,", 2412),
		word("like", 2413),
		word("this", 2414),
		word("isn't", 2415),
		word("a", 2416),
		word("test.", 2417)
	),
	div(
		{ class: "line" },
		word("This", 2418),
		word("guy", 2419),
		word("is", 2420),
		word("trying", 2421),
		word("to", 2422),
		word("make", 2423),
		word("me", 2424),
		word("do", 2425),
		word("something,", 2426)
	),
	div(
		{ class: "line" },
		word("but", 2427),
		word("the", 2428),
		word("urges", 2429),
		word("are", 2430),
		word("starting", 2431),
		word("to", 2432),
		word("calm", 2433),
		word("down", 2434),
		word("a", 2435)
	),
	div(
		{ class: "line" },
		word("bit", 2436),
		word("and", 2437),
		word("so", 2438),
		word("I", 2439),
		word("walk", 2440),
		word("real", 2441),
		word("cool", 2442),
		word("like", 2443),
		word("down", 2444),
		word("to", 2445),
		word("the", 2446)
	),
	div(
		{ class: "line" },
		word("drinking", 2447),
		word("fountain", 2448),
		word("and", 2449),
		word("feel", 2450),
		word("the", 2451),
		word("eyes", 2452),
		word("of", 2453),
		word("that", 2454)
	),
	div(
		{ class: "line" },
		word("doctor", 2455),
		word("on", 2456),
		word("my", 2457),
		word("back,", 2458),
		word("watching", 2459),
		word("me", 2460),
		word("like", 2461),
		word("a", 2462),
		word("hawk.", 2463)
	),
	div(
		{ class: "line" },
		word("When", 2464),
		word("I", 2465),
		word("return", 2466),
		word("without", 2467),
		word("making", 2468),
		word("a", 2469),
		word("single", 2470),
		word("jerk,", 2471)
	),
	div(
		{ class: "line" },
		word("I'm", 2472),
		word("smiling", 2473),
		word("like", 2474),
		word("I'm", 2475),
		word("in", 2476),
		word("on", 2477),
		word("his", 2478),
		word("secret", 2479),
		word("test,", 2480),
		word("and", 2481)
	),
	div(
		{ class: "line" },
		word("he", 2482),
		word("tells", 2483),
		word("me", 2484),
		word("I", 2485),
		word("can", 2486),
		word("go", 2487),
		word("home", 2488),
		word("now.", 2489)
	)
);
export const page33 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Right", 2490),
		word("when", 2491),
		word("we", 2492),
		word("walk", 2493),
		word("out", 2494),
		word("the", 2495),
		word("front", 2496),
		word("door", 2497),
		word("to", 2498)
	),
	div(
		{ class: "line" },
		word("the", 2499),
		word("hospital", 2500),
		word("I", 2501),
		word("let", 2502),
		word("out", 2503),
		word("a", 2504),
		word("nice", 2505),
		word("big", 2506),
		word("bark", 2507),
		word("and", 2508),
		word("snap", 2509)
	),
	div(
		{ class: "line" },
		word("my", 2510),
		word("head", 2511),
		word("right", 2512),
		word("over", 2513),
		word("to", 2514),
		word("my", 2515),
		word("mom", 2516),
		word("to", 2517),
		word("see", 2518),
		word("if", 2519),
		word("she", 2520)
	),
	div(
		{ class: "line" },
		word("heard", 2521),
		word("it,", 2522),
		word("but", 2523),
		word("she", 2524),
		word("doesn't", 2525),
		word("look", 2526),
		word("at", 2527),
		word("me", 2528),
		word("and", 2529)
	),
	div(
		{ class: "line" },
		word("keeps", 2530),
		word("on", 2531),
		word("goin'", 2532),
		word("like", 2533),
		word("nothing", 2534),
		word("happened.", 2535)
	)
);
export const page34 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("On", 2536),
		word("the", 2537),
		word("way", 2538),
		word("home", 2539),
		word("I", 2540),
		word("ask", 2541),
		word("her", 2542),
		word("if", 2543),
		word("I", 2544),
		word("have", 2545),
		word("the", 2546),
		word("barks", 2547)
	),
	div(
		{ class: "line" },
		word("and", 2548),
		word("what", 2549),
		word("the", 2550),
		word("doctor", 2551),
		word("had", 2552),
		word("said", 2553),
		word("about", 2554),
		word("me.", 2555),
		word("She", 2556)
	),
	div(
		{ class: "line" },
		word("tells", 2557),
		word("me", 2558),
		word("that", 2559),
		word("I", 2560),
		word("do", 2561),
		word("have", 2562),
		word("them", 2563),
		word("and", 2564),
		word("that", 2565),
		word("we're", 2566)
	),
	div(
		{ class: "line" },
		word("goin'", 2567),
		word("to", 2568),
		word("the", 2569),
		word("pharmacy", 2570),
		word("to", 2571),
		word("get", 2572),
		word("some", 2573),
		word("medicine", 2574)
	),
	div(
		{ class: "line" },
		word("that'll", 2575),
		word("make", 2576),
		word("it", 2577),
		word("all", 2578),
		word("better.", 2579),
		word("I", 2580),
		word("turn", 2581),
		word("to", 2582),
		word("face", 2583),
		word("her", 2584)
	),
	div(
		{ class: "line" },
		word("and", 2585),
		word("tell", 2586),
		word("her", 2587),
		word("that", 2588),
		word("I", 2589),
		word("hadn't", 2590),
		word("budged", 2591),
		word("during", 2592),
		word("the", 2593)
	),
	div(
		{ class: "line" },
		word("whole", 2594),
		word("test,", 2595),
		word("that", 2596),
		word("I", 2597),
		word("knew", 2598),
		word("about", 2599),
		word("the", 2600),
		word("test,", 2601),
		word("and", 2602)
	),
	div(
		{ class: "line" },
		word("that", 2603),
		word("I", 2604),
		word("hadn't", 2605),
		word("done", 2606),
		word("anything", 2607),
		word("at", 2608),
		word("all.", 2609),
		word("Then", 2610),
		word("she", 2611)
	),
	div(
		{ class: "line" },
		word("starts", 2612),
		word("to", 2613),
		word("cry,", 2614),
		word("tears", 2615),
		word("running", 2616),
		word("down", 2617),
		word("to", 2618),
		word("the", 2619)
	),
	div(
		{ class: "line" },
		word("corners", 2620),
		word("of", 2621),
		word("her", 2622),
		word("mouth,", 2623),
		word("and", 2624),
		word("she", 2625),
		word("starts", 2626)
	),
	div(
		{ class: "line" },
		word("rubbing", 2627),
		word("the", 2628),
		word("back", 2629),
		word("of", 2630),
		word("my", 2631),
		word("neck.", 2632)
	)
);
export const page35 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“The", 2633),
		word("waiting", 2634),
		word("room,", 2635),
		word("Brandt,”", 2636),
		word("she", 2637),
		word("says.", 2638),
		word("“He", 2639)
	),
	div(
		{ class: "line" },
		word("was", 2640),
		word("watching", 2641),
		word("you", 2642),
		word("in", 2643),
		word("the", 2644),
		word("waiting", 2645),
		word("room.”", 2646)
	)
);
export const page36 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("And", 2647),
		word("I'm", 2648),
		word("thinking", 2649),
		word("that", 2650),
		word("was", 2651),
		word("a", 2652),
		word("dirty", 2653),
		word("trick.", 2654)
	)
);
export const page37 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I", 2655),
		word("end", 2656),
		word("up", 2657),
		word("taking", 2658),
		word("this", 2659),
		word("expensive", 2660),
		word("medicine", 2661),
		word("for", 2662),
		word("a", 2663)
	),
	div(
		{ class: "line" },
		word("week,", 2664),
		word("but", 2665),
		word("all", 2666),
		word("it", 2667),
		word("does", 2668),
		word("is", 2669),
		word("make", 2670),
		word("me", 2671),
		word("sleep", 2672),
		word("almost", 2673)
	),
	div(
		{ class: "line" },
		word("all", 2674),
		word("day", 2675),
		word("in", 2676),
		word("school", 2677),
		word("and", 2678),
		word("my", 2679),
		word("mom", 2680),
		word("says", 2681),
		word("that's", 2682),
		word("not", 2683)
	),
	div(
		{ class: "line" },
		word("going", 2684),
		word("to", 2685),
		word("work,", 2686),
		word("and", 2687),
		word("I'm", 2688),
		word("sorta", 2689),
		word("happy,", 2690),
		word("because", 2691)
	),
	div(
		{ class: "line" },
		word("sleeping", 2692),
		word("all", 2693),
		word("day", 2694),
		word("is", 2695),
		word("not", 2696),
		word("the", 2697),
		word("sort", 2698),
		word("of", 2699),
		word("thing", 2700),
		word("that", 2701)
	),
	div(
		{ class: "line" },
		word("I", 2702),
		word("like", 2703),
		word("doin'", 2704),
		word("on", 2705),
		word("a", 2706),
		word("regular", 2707),
		word("basis.", 2708)
	)
);
export const page38 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Tonight", 2709),
		word("we're", 2710),
		word("supposed", 2711),
		word("to", 2712),
		word("have", 2713),
		word("a", 2714),
		word("conference", 2715)
	),
	div(
		{ class: "line" },
		word("at", 2716),
		word("school,", 2717),
		word("and", 2718),
		word("when", 2719),
		word("me", 2720),
		word("and", 2721),
		word("my", 2722),
		word("mom", 2723),
		word("get", 2724)
	),
	div(
		{ class: "line" },
		word("there", 2725),
		word("all", 2726),
		word("the", 2727),
		word("teachers", 2728),
		word("are", 2729),
		word("there", 2730),
		word("at", 2731),
		word("this", 2732),
		word("big", 2733)
	),
	div(
		{ class: "line" },
		word("table,", 2734),
		word("and", 2735),
		word("I'm", 2736),
		word("at", 2737),
		word("the", 2738),
		word("end", 2739),
		word("of", 2740),
		word("it", 2741),
		word("like", 2742),
		word("it's", 2743),
		word("my", 2744)
	),
	div(
		{ class: "line" },
		word("birthday", 2745),
		word("or", 2746),
		word("something.", 2747),
		word("Sister", 2748),
		word("Agatha", 2749),
		word("says", 2750)
	),
	div(
		{ class: "line" },
		word("that", 2751),
		word("she", 2752),
		word("didn't", 2753),
		word("know", 2754),
		word("that", 2755),
		word("the", 2756),
		word("barks", 2757),
		word("was", 2758),
		word("a", 2759)
	),
	div(
		{ class: "line" },
		word("real", 2760),
		word("disease,", 2761),
		word("and", 2762),
		word("how", 2763),
		word("she", 2764),
		word("really", 2765),
		word("did", 2766),
		word("believe", 2767),
		word("I", 2768)
	),
	div(
		{ class: "line" },
		word("was", 2769),
		word("trying", 2770),
		word("to", 2771),
		word("get", 2772),
		word("my", 2773),
		word("classmates", 2774),
		word("to", 2775),
		word("laugh.", 2776)
	),
	div(
		{ class: "line" },
		word("That", 2777),
		word("sorta'", 2778),
		word("made", 2779),
		word("me", 2780),
		word("feel", 2781),
		word("good,", 2782),
		word("like", 2783),
		word("she", 2784),
		word("was", 2785)
	),
	div(
		{ class: "line" },
		word("the", 2786),
		word("one", 2787),
		word("in", 2788),
		word("the", 2789),
		word("hot", 2790),
		word("seat—I", 2791),
		word("love", 2792),
		word("watching", 2793)
	),
	div(
		{ class: "line" },
		word("adults", 2794),
		word("get", 2795),
		word("in", 2796),
		word("trouble", 2797),
		word("almost", 2798),
		word("as", 2799),
		word("much", 2800),
		word("as", 2801)
	),
	div(
		{ class: "line" },
		word("getting", 2802),
		word("into", 2803),
		word("trouble", 2804),
		word("myself.", 2805),
		word("But", 2806),
		word("then", 2807),
		word("all", 2808),
		word("of", 2809)
	),
	div(
		{ class: "line" },
		word("them", 2810),
		word("start", 2811),
		word("apologizing", 2812),
		word("to", 2813),
		word("me,", 2814),
		word("which", 2815),
		word("is", 2816),
		word("funny,", 2817)
	),
	div(
		{ class: "line" },
		word("because", 2818),
		word("it's", 2819),
		word("like", 2820),
		word("a", 2821),
		word("few", 2822),
		word("weeks", 2823),
		word("ago", 2824),
		word("I", 2825),
		word("was", 2826)
	),
	div(
		{ class: "line" },
		word("getting", 2827),
		word("detentions", 2828),
		word("for", 2829),
		word("all", 2830),
		word("the", 2831),
		word("trouble", 2832),
		word("I", 2833),
		word("was", 2834)
	),
	div(
		{ class: "line" },
		word("causing", 2835),
		word("and", 2836),
		word("was", 2837),
		word("approaching", 2838),
		word("the", 2839),
		word("all-time", 2840)
	),
	div(
		{ class: "line" },
		word("record", 2841),
		word("for", 2842),
		word("detentions", 2843),
		word("in", 2844),
		word("the", 2845),
		word("entire", 2846),
		word("history", 2847),
		word("of", 2848)
	),
	div(
		{ class: "line" },
		word("the", 2849),
		word("school.", 2850),
		word("I", 2851),
		word("thought", 2852),
		word("that", 2853),
		word("was", 2854),
		word("pretty", 2855),
		word("cool,", 2856)
	),
	div(
		{ class: "line" },
		word("but", 2857),
		word("my", 2858),
		word("mom", 2859),
		word("said", 2860),
		word("that", 2861),
		word("it", 2862),
		word("wasn't", 2863),
		word("something", 2864)
	),
	div(
		{ class: "line" },
		word("to", 2865),
		word("be", 2866),
		word("proud", 2867),
		word("of,", 2868),
		word("and", 2869),
		word("that", 2870),
		word("it", 2871),
		word("wasn't", 2872),
		word("like", 2873)
	),
	div(
		{ class: "line" },
		word("something", 2874),
		word("I", 2875),
		word("could", 2876),
		word("put", 2877),
		word("on", 2878),
		word("my", 2879),
		word("resume,", 2880)
	),
	div(
		{ class: "line" },
		word("whatever", 2881),
		word("the", 2882),
		word("hell", 2883),
		word("that's", 2884),
		word("supposed", 2885),
		word("to", 2886),
		word("mean.", 2887)
	)
);
export const page39 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I'm", 2888),
		word("still", 2889),
		word("sort", 2890),
		word("of", 2891),
		word("embarrassed", 2892),
		word("about", 2893),
		word("having", 2894),
		word("a", 2895)
	),
	div(
		{ class: "line" },
		word("disease", 2896),
		word("and", 2897),
		word("all", 2898),
		word("that,", 2899),
		word("and", 2900),
		word("tell", 2901),
		word("them", 2902),
		word("that", 2903),
		word("I", 2904)
	),
	div(
		{ class: "line" },
		word("don't", 2905),
		word("know", 2906),
		word("what", 2907),
		word("they're", 2908),
		word("talking", 2909),
		word("about—that", 2910)
	),
	div(
		{ class: "line" },
		word("I", 2911),
		word("didn't", 2912),
		word("know", 2913),
		word("anything", 2914),
		word("about", 2915),
		word("any", 2916)
	),
	div(
		{ class: "line" },
		word("“syndrome,”", 2917),
		word("all", 2918),
		word("the", 2919),
		word("while", 2920),
		word("shaking", 2921),
		word("my", 2922),
		word("head", 2923)
	),
	div(
		{ class: "line" },
		word("even", 2924),
		word("harder,", 2925),
		word("hoping", 2926),
		word("each", 2927),
		word("time", 2928),
		word("that", 2929),
		word("they", 2930)
	),
	div(
		{ class: "line" },
		word("hadn't", 2931),
		word("noticed", 2932),
		word("the", 2933),
		word("last", 2934),
		word("jerk", 2935),
		word("though", 2936),
		word("they're", 2937)
	),
	div(
		{ class: "line" },
		word("looking", 2938),
		word("straight", 2939),
		word("at", 2940),
		word("me.", 2941),
		word("Everyone", 2942),
		word("starts", 2943)
	),
	div(
		{ class: "line" },
		word("staring", 2944),
		word("real", 2945),
		word("hard,", 2946),
		word("like", 2947),
		word("when", 2948),
		word("I'm", 2949),
		word("in", 2950),
		word("trouble", 2951)
	),
	div(
		{ class: "line" },
		word("and", 2952),
		word("they're", 2953),
		word("trying", 2954),
		word("to", 2955),
		word("figure", 2956),
		word("out", 2957),
		word("how", 2958),
		word("to", 2959),
		word("get", 2960)
	),
	div(
		{ class: "line" },
		word("me", 2961),
		word("to", 2962),
		word("stop", 2963),
		word("misbehaving.", 2964),
		word("Only", 2965),
		word("it's", 2966),
		word("really", 2967),
		word("bad", 2968)
	),
	div(
		{ class: "line" },
		word("this", 2969),
		word("time", 2970),
		word("and", 2971),
		word("I", 2972),
		word("can't", 2973),
		word("stop", 2974),
		word("the", 2975),
		word("noises", 2976),
		word("and", 2977)
	),
	div(
		{ class: "line" },
		word("twitching,", 2978),
		word("and", 2979),
		word("my", 2980),
		word("mom", 2981),
		word("starts", 2982),
		word("looking", 2983)
	),
	div(
		{ class: "line" },
		word("worried", 2984),
		word("and", 2985),
		word("tells", 2986),
		word("me", 2987),
		word("to", 2988),
		word("settle", 2989),
		word("down.", 2990),
		word("I", 2991),
		word("keep", 2992)
	),
	div(
		{ class: "line" },
		word("hitting", 2993),
		word("my", 2994),
		word("knee", 2995),
		word("under", 2996),
		word("the", 2997),
		word("table", 2998),
		word("and", 2999)
	),
	div(
		{ class: "line" },
		word("everyone", 3000),
		word("looks", 3001),
		word("down", 3002),
		word("at", 3003),
		word("the", 3004),
		word("table", 3005),
		word("popping", 3006)
	),
	div(
		{ class: "line" },
		word("up", 3007),
		word("and", 3008),
		word("down,", 3009),
		word("and", 3010),
		word("then", 3011),
		word("I'm", 3012),
		word("shaking", 3013),
		word("my", 3014),
		word("head", 3015)
	),
	div(
		{ class: "line" },
		word("back", 3016),
		word("and", 3017),
		word("forth", 3018),
		word("like", 3019),
		word("crazy,", 3020),
		word("and", 3021),
		word("barking,", 3022),
		word("and", 3023)
	),
	div(
		{ class: "line" },
		word("Sister", 3024),
		word("Agatha", 3025),
		word("stops", 3026),
		word("talking", 3027),
		word("to", 3028),
		word("my", 3029),
		word("mom", 3030)
	),
	div(
		{ class: "line" },
		word("about", 3031),
		word("what", 3032),
		word("times", 3033),
		word("I'm", 3034),
		word("supposed", 3035),
		word("to", 3036),
		word("take", 3037),
		word("the", 3038)
	),
	div(
		{ class: "line" },
		word("medicine", 3039),
		word("at", 3040),
		word("school.", 3041),
		word("Everyone", 3042),
		word("is", 3043),
		word("looking", 3044),
		word("back", 3045)
	),
	div(
		{ class: "line" },
		word("and", 3046),
		word("forth", 3047),
		word("between", 3048),
		word("my", 3049),
		word("mom", 3050),
		word("and", 3051),
		word("me,", 3052),
		word("like", 3053)
	),
	div(
		{ class: "line" },
		word("they", 3054),
		word("don't", 3055),
		word("know", 3056),
		word("what", 3057),
		word("to", 3058),
		word("do,", 3059),
		word("and", 3060),
		word("then", 3061)
	),
	div(
		{ class: "line" },
		word("Principal", 3062),
		word("Cohen", 3063),
		word("says", 3064),
		word("that", 3065),
		word("maybe", 3066),
		word("my", 3067),
		word("mom", 3068)
	),
	div(
		{ class: "line" },
		word("should", 3069),
		word("take", 3070),
		word("me", 3071),
		word("home,", 3072),
		word("but", 3073),
		word("no", 3074),
		word("one", 3075),
		word("can", 3076),
		word("hear", 3077)
	),
	div(
		{ class: "line" },
		word("him", 3078),
		word("’cause", 3079),
		word("I'm", 3080),
		word("barking", 3081),
		word("so", 3082),
		word("loud,", 3083),
		word("and", 3084),
		word("finally", 3085),
		word("I", 3086)
	),
	div(
		{ class: "line" },
		word("kick", 3087),
		word("the", 3088),
		word("table", 3089),
		word("so", 3090),
		word("hard", 3091),
		word("that", 3092),
		word("everyone's", 3093),
		word("coffee", 3094)
	),
	div(
		{ class: "line" },
		word("mugs", 3095),
		word("dump", 3096),
		word("over", 3097),
		word("onto", 3098),
		word("the", 3099),
		word("table", 3100),
		word("and", 3101),
		word("people", 3102)
	),
	div(
		{ class: "line" },
		word("start", 3103),
		word("getting", 3104),
		word("up", 3105),
		word("out", 3106),
		word("of", 3107),
		word("their", 3108),
		word("seats.", 3109),
		word("I", 3110),
		word("finish", 3111),
		word("it", 3112)
	),
	div(
		{ class: "line" },
		word("off", 3113),
		word("like", 3114),
		word("a", 3115),
		word("real", 3116),
		word("pro", 3117),
		word("and", 3118),
		word("start", 3119),
		word("shaking", 3120),
		word("all", 3121),
		word("over", 3122)
	),
	div(
		{ class: "line" },
		word("like", 3123),
		word("I've", 3124),
		word("never", 3125),
		word("shaked", 3126),
		word("before", 3127),
		word("and", 3128),
		word("end", 3129),
		word("up", 3130)
	),
	div(
		{ class: "line" },
		word("falling", 3131),
		word("right", 3132),
		word("outta'", 3133),
		word("my", 3134),
		word("chair.", 3135)
	)
);
export const page40 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("They're", 3136),
		word("all", 3137),
		word("looking", 3138),
		word("at", 3139),
		word("me", 3140),
		word("like", 3141),
		word("I've", 3142),
		word("just", 3143),
		word("been", 3144)
	),
	div(
		{ class: "line" },
		word("hit", 3145),
		word("by", 3146),
		word("a", 3147),
		word("car", 3148),
		word("or", 3149),
		word("somethin',", 3150),
		word("like", 3151),
		word("this", 3152),
		word("one", 3153),
		word("time", 3154),
		word("at", 3155)
	),
	div(
		{ class: "line" },
		word("school", 3156),
		word("when", 3157),
		word("this", 3158),
		word("little", 3159),
		word("girl", 3160),
		word("got", 3161),
		word("run", 3162),
		word("over", 3163),
		word("by", 3164),
		word("a", 3165)
	),
	div(
		{ class: "line" },
		word("car", 3166),
		word("at", 3167),
		word("recess,", 3168),
		word("and", 3169),
		word("people", 3170),
		word("came", 3171),
		word("out", 3172),
		word("of", 3173),
		word("their", 3174)
	),
	div(
		{ class: "line" },
		word("houses", 3175),
		word("and", 3176),
		word("just", 3177),
		word("stood", 3178),
		word("there", 3179),
		word("staring,", 3180)
	),
	div(
		{ class: "line" },
		word("wondering", 3181),
		word("if", 3182),
		word("the", 3183),
		word("world", 3184),
		word("was", 3185),
		word("going", 3186),
		word("to", 3187),
		word("come", 3188)
	),
	div(
		{ class: "line" },
		word("to", 3189),
		word("an", 3190),
		word("end.", 3191)
	)
);
export const page41 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I", 3192),
		word("mean,", 3193),
		word("I", 3194),
		word("kinda'", 3195),
		word("feel", 3196),
		word("sorry", 3197),
		word("for", 3198),
		word("them—'cause", 3199)
	),
	div(
		{ class: "line" },
		word("I", 3200),
		word("know", 3201),
		word("it's", 3202),
		word("not", 3203),
		word("like", 3204),
		word("they're", 3205),
		word("enjoying", 3206),
		word("watching", 3207)
	),
	div(
		{ class: "line" },
		word("me", 3208),
		word("have", 3209),
		word("a", 3210),
		word("fit.", 3211),
		word("Even", 3212),
		word("Sister", 3213),
		word("Agatha", 3214),
		word("looks", 3215),
		word("like", 3216)
	),
	div(
		{ class: "line" },
		word("maybe", 3217),
		word("she's", 3218),
		word("not", 3219),
		word("having", 3220),
		word("a", 3221),
		word("good", 3222),
		word("time,", 3223),
		word("and", 3224),
		word("has", 3225)
	),
	div(
		{ class: "line" },
		word("lost", 3226),
		word("that", 3227),
		word("evil", 3228),
		word("look", 3229),
		word("that", 3230),
		word("she", 3231),
		word("usually", 3232),
		word("gives", 3233),
		word("me", 3234)
	),
	div(
		{ class: "line" },
		word("when", 3235),
		word("I", 3236),
		word("turn", 3237),
		word("around", 3238),
		word("in", 3239),
		word("church", 3240),
		word("to", 3241),
		word("see", 3242),
		word("if", 3243),
		word("she's", 3244)
	),
	div(
		{ class: "line" },
		word("spyin'", 3245),
		word("on", 3246),
		word("me.", 3247)
	)
);
export const page42 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Me,", 3248),
		word("I", 3249),
		word("just", 3250),
		word("wish", 3251),
		word("I", 3252),
		word("could", 3253),
		word("be", 3254),
		word("back", 3255),
		word("in", 3256),
		word("the", 3257),
		word("bullpen", 3258)
	),
	div(
		{ class: "line" },
		word("with", 3259),
		word("Abe", 3260),
		word("so", 3261),
		word("he", 3262),
		word("could", 3263),
		word("launch", 3264),
		word("me", 3265),
		word("nice", 3266),
		word("and", 3267)
	),
	div(
		{ class: "line" },
		word("high—and", 3268),
		word("then,", 3269),
		word("right", 3270),
		word("when", 3271),
		word("I", 3272),
		word("get", 3273),
		word("that", 3274),
		word("great", 3275)
	),
	div(
		{ class: "line" },
		word("view", 3276),
		word("of", 3277),
		word("the", 3278),
		word("neighborhood,", 3279),
		word("I", 3280),
		word("can", 3281),
		word("let", 3282),
		word("out", 3283),
		word("one", 3284)
	),
	div(
		{ class: "line" },
		word("last,", 3285),
		word("perfect", 3286),
		word("bark,", 3287),
		word("and", 3288),
		word("that", 3289),
		word("maybe", 3290),
		word("that'll", 3291),
		word("be", 3292)
	),
	div(
		{ class: "line" },
		word("the", 3293),
		word("end", 3294),
		word("of", 3295),
		word("it.", 3296)
	)
);
