import { div, section, span } from "@thi.ng/hiccup-html";

// 1. The Word Generator - just need text and global index
const word = (text: string) =>
	span(
		{
			class: "word",
		},

		text + " " // xtra space for layout
	);

// 2. Page Structure
export const page1 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("My"),
		word("teachers"),
		word("look"),
		word("at"),
		word("me"),
		word("funny"),
		word("when"),
		word("I"),
		word("make")
	),
	div(
		{ class: "line" },
		word("weird"),
		word("noises,"),
		word("but"),
		word("my"),
		word("friends,"),
		word("they"),
		word("usually")
	),
	div(
		{ class: "line" },
		word("just"),
		word("laugh."),
		word("It's"),
		word("funny"),
		word("to"),
		word("them,"),
		word("and"),
		word("they"),
		word("are")
	),
	div(
		{ class: "line" },
		word("pretty"),
		word("cool"),
		word("about"),
		word("it—they"),
		word("don't"),
		word("make"),
		word("fun"),
		word("of")
	),
	div(
		{ class: "line" },
		word("me"),
		word("really"),
		word("but"),
		word("only"),
		word("get"),
		word("a"),
		word("kick"),
		word("out"),
		word("of")
	),
	div(
		{ class: "line" },
		word("it—like"),
		word("when"),
		word("we"),
		word("are"),
		word("in"),
		word("the"),
		word("middle"),
		word("of"),
		word("a"),
		word("test")
	),
	div(
		{ class: "line" },
		word("or"),
		word("something,"),
		word("and"),
		word("then"),
		word("out"),
		word("of"),
		word("nowhere"),
		word("I")
	),
	div(
		{ class: "line" },
		word("let"),
		word("out"),
		word("a"),
		word("bark,"),
		word("I"),
		word("mean"),
		word("a"),
		word("loud"),
		word("bark,"),
		word("where")
	),
	div(
		{ class: "line" },
		word("everyone"),
		word("turns"),
		word("around"),
		word("to"),
		word("me"),
		word("and"),
		word("smiles,")
	),
	div(
		{ class: "line" },
		word("and"),
		word("then"),
		word("someone"),
		word("starts"),
		word("laughing,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("then"),
		word("everyone"),
		word("else"),
		word("gets"),
		word("going."),
		word("To"),
		word("tell"),
		word("you")
	),
	div(
		{ class: "line" },
		word("the"),
		word("truth"),
		word("it"),
		word("doesn't"),
		word("bother"),
		word("me"),
		word("at"),
		word("all,"),
		word("and"),
		word("I")
	),
	div(
		{ class: "line" },
		word("laugh"),
		word("right"),
		word("along"),
		word("with"),
		word("them"),
		word("most"),
		word("of"),
		word("the"),
		word("time.")
	)
);
export const page2 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I"),
		word("go"),
		word("to"),
		word("this"),
		word("school"),
		word("where"),
		word("our"),
		word("teachers"),
		word("are")
	),
	div(
		{ class: "line" },
		word("mostly"),
		word("nuns—we"),
		word("have"),
		word("to"),
		word("go"),
		word("to"),
		word("church")
	),
	div(
		{ class: "line" },
		word("every"),
		word("week,"),
		word("and"),
		word("sometimes"),
		word("I'll"),
		word("bark"),
		word("in")
	),
	div(
		{ class: "line" },
		word("church"),
		word("too."),
		word("This"),
		word("one"),
		word("nun,"),
		word("Sister"),
		word("Agatha,")
	),
	div(
		{ class: "line" },
		word("told"),
		word("me"),
		word("that"),
		word("Jesus"),
		word("didn't"),
		word("appreciate"),
		word("me")
	),
	div(
		{ class: "line" },
		word("barking"),
		word("like"),
		word("that"),
		word("in"),
		word("church"),
		word("and"),
		word("disrupting")
	),
	div(
		{ class: "line" },
		word("everything."),
		word("She's"),
		word("mean"),
		word("though"),
		word("it's")
	),
	div(
		{ class: "line" },
		word("funny—there's"),
		word("always"),
		word("that"),
		word("question"),
		word("about")
	),
	div(
		{ class: "line" },
		word("nuns—“is"),
		word("she"),
		word("mean?”—that"),
		word("everyone's")
	),
	div(
		{ class: "line" },
		word("always"),
		word("talkin'"),
		word("about"),
		word("whenever"),
		word("you"),
		word("find"),
		word("out")
	),
	div(
		{ class: "line" },
		word("who"),
		word("your"),
		word("teachers"),
		word("will"),
		word("be"),
		word("for"),
		word("the"),
		word("next"),
		word("year.")
	),
	div(
		{ class: "line" },
		word("It's"),
		word("always"),
		word("how"),
		word("mean"),
		word("Sister"),
		word("so"),
		word("and"),
		word("so"),
		word("is,")
	),
	div(
		{ class: "line" },
		word("and"),
		word("how"),
		word("this"),
		word("one"),
		word("cuts"),
		word("your"),
		word("hair"),
		word("when")
	),
	div(
		{ class: "line" },
		word("you're"),
		word("not"),
		word("looking"),
		word("if"),
		word("it"),
		word("grows"),
		word("too"),
		word("long"),
		word("and")
	),
	div(
		{ class: "line" },
		word("how"),
		word("another"),
		word("one"),
		word("will"),
		word("ask"),
		word("you"),
		word("to"),
		word("hold"),
		word("your")
	),
	div(
		{ class: "line" },
		word("palms"),
		word("out"),
		word("so"),
		word("she"),
		word("can"),
		word("smack’em"),
		word("with"),
		word("a"),
		word("ruler.")
	),
	div(
		{ class: "line" },
		word("My"),
		word("brother"),
		word("told"),
		word("me"),
		word("all"),
		word("kinds"),
		word("of"),
		word("horrible"),
		word("stuff")
	),
	div(
		{ class: "line" },
		word("about"),
		word("every"),
		word("nun"),
		word("I"),
		word("was"),
		word("gonna'"),
		word("have—but")
	),
	div(
		{ class: "line" },
		word("with"),
		word("Sister"),
		word("Agatha,"),
		word("he"),
		word("wasn't"),
		word("kidding.")
	),
	div(
		{ class: "line" },
		word("Yesterday,"),
		word("after"),
		word("telling"),
		word("me"),
		word("all"),
		word("about"),
		word("how")
	),
	div(
		{ class: "line" },
		word("Jesus"),
		word("didn't"),
		word("appreciate"),
		word("me"),
		word("disrupting"),
		word("His")
	),
	div(
		{ class: "line" },
		word("Mass,"),
		word("she"),
		word("smacked"),
		word("me"),
		word("in"),
		word("the"),
		word("back"),
		word("of"),
		word("the")
	),
	div(
		{ class: "line" },
		word("head,"),
		word("and"),
		word("told"),
		word("me"),
		word("maybe"),
		word("that"),
		word("will"),
		word("stop"),
		word("me")
	),
	div({ class: "line" }, word("from"), word("shaking"), word("it."))
);
export const page3 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I"),
		word("figured"),
		word("though,"),
		word("that"),
		word("Jesus"),
		word("didn't"),
		word("mind"),
		word("so")
	),
	div(
		{ class: "line" },
		word("much—since"),
		word("I"),
		word("prayed"),
		word("to"),
		word("Him"),
		word("all"),
		word("the"),
		word("time"),
		word("to")
	),
	div(
		{ class: "line" },
		word("help"),
		word("me"),
		word("to"),
		word("stop"),
		word("shaking"),
		word("my"),
		word("head,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("barking,"),
		word("though"),
		word("it"),
		word("never"),
		word("seemed"),
		word("to"),
		word("help.")
	),
	div(
		{ class: "line" },
		word("The"),
		word("way"),
		word("I"),
		word("see"),
		word("it,"),
		word("if"),
		word("He"),
		word("didn't"),
		word("want"),
		word("to"),
		word("help,")
	),
	div(
		{ class: "line" },
		word("then"),
		word("He"),
		word("probably"),
		word("didn't"),
		word("care"),
		word("too"),
		word("much"),
		word("if"),
		word("I")
	),
	div(
		{ class: "line" },
		word("did"),
		word("it"),
		word("in"),
		word("church."),
		word("Sister"),
		word("Agatha"),
		word("and"),
		word("the"),
		word("rest")
	),
	div(
		{ class: "line" },
		word("of"),
		word("the"),
		word("teachers"),
		word("told"),
		word("my"),
		word("mom"),
		word("that"),
		word("I"),
		word("was")
	),
	div(
		{ class: "line" },
		word("forever"),
		word("disrupting"),
		word("the"),
		word("classes"),
		word("and"),
		word("Masses,")
	),
	div(
		{ class: "line" },
		word("and"),
		word("that"),
		word("they"),
		word("were"),
		word("thinking"),
		word("of"),
		word("taking")
	),
	div(
		{ class: "line" },
		word("further"),
		word("action"),
		word("if"),
		word("I"),
		word("didn't"),
		word("stop,"),
		word("whatever")
	),
	div(
		{ class: "line" },
		word("that's"),
		word("supposed"),
		word("to"),
		word("mean."),
		word("What"),
		word("they"),
		word("were")
	),
	div(
		{ class: "line" },
		word("going"),
		word("to"),
		word("do"),
		word("I"),
		word("don't"),
		word("know—but"),
		word("my"),
		word("mom")
	),
	div(
		{ class: "line" },
		word("thought"),
		word("something"),
		word("was"),
		word("wrong"),
		word("with"),
		word("me")
	),
	div(
		{ class: "line" },
		word("anyway,"),
		word("especially"),
		word("after"),
		word("this"),
		word("one"),
		word("time"),
		word("when")
	),
	div(
		{ class: "line" },
		word("I"),
		word("called"),
		word("my"),
		word("basketball"),
		word("coach"),
		word("an"),
		word("asshole"),
		word("right")
	),
	div(
		{ class: "line" },
		word("to"),
		word("his"),
		word("face"),
		word("for"),
		word("taking"),
		word("me"),
		word("outta'"),
		word("the"),
		word("game.")
	)
);
export const page4 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The"),
		word("thing"),
		word("is,"),
		word("I"),
		word("couldn't"),
		word("help"),
		word("it—it"),
		word("just"),
		word("sorta'")
	),
	div(
		{ class: "line" },
		word("came"),
		word("out"),
		word("of"),
		word("me."),
		word("I"),
		word("used"),
		word("to"),
		word("go"),
		word("over"),
		word("to"),
		word("my")
	),
	div(
		{ class: "line" },
		word("friend"),
		word("Justin's"),
		word("house"),
		word("all"),
		word("the"),
		word("time—but"),
		word("his")
	),
	div(
		{ class: "line" },
		word("dad"),
		word("was"),
		word("the"),
		word("basketball"),
		word("coach,"),
		word("and"),
		word("ever"),
		word("since")
	),
	div(
		{ class: "line" },
		word("I"),
		word("called"),
		word("his"),
		word("dad"),
		word("an"),
		word("asshole,"),
		word("I"),
		word("haven't"),
		word("been")
	),
	div(
		{ class: "line" },
		word("over"),
		word("there."),
		word("Justin"),
		word("looks"),
		word("at"),
		word("me"),
		word("funny"),
		word("in"),
		word("school")
	),
	div(
		{ class: "line" },
		word("sometimes,"),
		word("like, ’Why'd"),
		word("you"),
		word("have"),
		word("to"),
		word("call"),
		word("my")
	),
	div(
		{ class: "line" },
		word("dad"),
		word("an"),
		word("asshole?"),
		word("That's"),
		word("my"),
		word("dad,"),
		word("man'—and"),
		word("I")
	),
	div(
		{ class: "line" },
		word("feel"),
		word("real"),
		word("bad"),
		word("and"),
		word("all,"),
		word("but"),
		word("like"),
		word("I"),
		word("said,"),
		word("I"),
		word("couldn't")
	),
	div(
		{ class: "line" },
		word("help"),
		word("it."),
		word("Anyway,"),
		word("I"),
		word("still"),
		word("think"),
		word("he"),
		word("shouldn't")
	),
	div(
		{ class: "line" },
		word("have"),
		word("taken"),
		word("me"),
		word("outta'"),
		word("the"),
		word("game.")
	)
);
export const page5 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("My"),
		word("mom's"),
		word("taking"),
		word("me"),
		word("to"),
		word("the"),
		word("hospital"),
		word("today")
	),
	div(
		{ class: "line" },
		word("to"),
		word("see"),
		word("if"),
		word("something's"),
		word("wrong"),
		word("with"),
		word("me."),
		word("I"),
		word("do")
	),
	div(
		{ class: "line" },
		word("other"),
		word("weird"),
		word("stuff"),
		word("too—like"),
		word("stomping"),
		word("my"),
		word("feet")
	),
	div(
		{ class: "line" },
		word("and"),
		word("grunting,"),
		word("and"),
		word("making"),
		word("my"),
		word("face"),
		word("all")
	),
	div(
		{ class: "line" },
		word("screwed"),
		word("up."),
		word("Sometimes"),
		word("I"),
		word("get"),
		word("tired"),
		word("of"),
		word("it")
	),
	div(
		{ class: "line" },
		word("and"),
		word("really"),
		word("want"),
		word("to"),
		word("stop,"),
		word("but"),
		word("it's"),
		word("like"),
		word("I"),
		word("can't.")
	)
);
export const page6 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("At"),
		word("first"),
		word("it"),
		word("was"),
		word("all"),
		word("a"),
		word("big"),
		word("joke—because"),
		word("there")
	),
	div(
		{ class: "line" },
		word("was"),
		word("this"),
		word("one"),
		word("guy"),
		word("at"),
		word("the"),
		word("swimming")
	),
	div(
		{ class: "line" },
		word("pool—Crazy"),
		word("Charlie—who"),
		word("would"),
		word("bark"),
		word("right")
	),
	div(
		{ class: "line" },
		word("before"),
		word("he"),
		word("dove"),
		word("off"),
		word("the"),
		word("high"),
		word("dive"),
		word("and"),
		word("into")
	),
	div(
		{ class: "line" },
		word("the"),
		word("tank."),
		word("He"),
		word("was"),
		word("an"),
		word("old"),
		word("man"),
		word("and"),
		word("he"),
		word("would")
	),
	div(
		{ class: "line" },
		word("do"),
		word("that"),
		word("same"),
		word("damn"),
		word("dive"),
		word("every"),
		word("time,"),
		word("like"),
		word("he")
	),
	div(
		{ class: "line" },
		word("was"),
		word("trying"),
		word("out"),
		word("for"),
		word("the"),
		word("Olympics"),
		word("or")
	),
	div(
		{ class: "line" },
		word("something—but"),
		word("every"),
		word("time"),
		word("his"),
		word("bony"),
		word("hands")
	),
	div(
		{ class: "line" },
		word("would"),
		word("hit"),
		word("the"),
		word("water"),
		word("palms"),
		word("up,"),
		word("and"),
		word("his"),
		word("one")
	),
	div(
		{ class: "line" },
		word("leg"),
		word("never"),
		word("seemed"),
		word("to"),
		word("be"),
		word("in"),
		word("line"),
		word("with"),
		word("the")
	),
	div(
		{ class: "line" },
		word("other"),
		word("one."),
		word("Then"),
		word("he'd"),
		word("go"),
		word("up"),
		word("the"),
		word("ladder"),
		word("doing")
	),
	div(
		{ class: "line" },
		word("these"),
		word("weird"),
		word("twitches,"),
		word("stand"),
		word("at"),
		word("the"),
		word("end"),
		word("of")
	),
	div(
		{ class: "line" },
		word("the"),
		word("board,"),
		word("let"),
		word("out"),
		word("a"),
		word("bark,"),
		word("and"),
		word("then"),
		word("dive")
	),
	div(
		{ class: "line" },
		word("again."),
		word("It"),
		word("wasn't"),
		word("like"),
		word("a"),
		word("little"),
		word("bark"),
		word("either—it")
	),
	div(
		{ class: "line" },
		word("was"),
		word("a"),
		word("loud"),
		word("bark,"),
		word("and"),
		word("everyone"),
		word("always"),
		word("heard")
	),
	div(
		{ class: "line" },
		word("it"),
		word("and"),
		word("would"),
		word("look"),
		word("up"),
		word("at"),
		word("his"),
		word("old"),
		word("ass"),
		word("getting")
	),
	div(
		{ class: "line" },
		word("ready"),
		word("to"),
		word("dive,"),
		word("and"),
		word("laugh."),
		word("We"),
		word("imitated"),
		word("him"),
		word("a")
	),
	div(
		{ class: "line" },
		word("lot,"),
		word("walking"),
		word("around"),
		word("all"),
		word("the"),
		word("different"),
		word("parts"),
		word("of")
	),
	div(
		{ class: "line" },
		word("the"),
		word("pool,"),
		word("barking"),
		word("and"),
		word("twitching"),
		word("and"),
		word("yelling")
	),
	div(
		{ class: "line" },
		word("out"),
		word("“Crazy"),
		word("Charlie!”,’cause"),
		word("a"),
		word("lot"),
		word("of"),
		word("times")
	),
	div(
		{ class: "line" },
		word("Crazy"),
		word("Charlie"),
		word("himself"),
		word("would"),
		word("do"),
		word("that"),
		word("while")
	),
	div(
		{ class: "line" },
		word("he"),
		word("was"),
		word("walking"),
		word("from"),
		word("the"),
		word("showers"),
		word("to"),
		word("the")
	),
	div({ class: "line" }, word("diving"), word("tank."))
);
export const page7 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Rivi"),
		word("is"),
		word("the"),
		word("name"),
		word("of"),
		word("the"),
		word("pool"),
		word("we"),
		word("all"),
		word("go"),
		word("to"),
		word("and")
	),
	div(
		{ class: "line" },
		word("I"),
		word("spend"),
		word("most"),
		word("of"),
		word("my"),
		word("summers"),
		word("there,"),
		word("except")
	),
	div(
		{ class: "line" },
		word("when"),
		word("I'm"),
		word("at"),
		word("camp."),
		word("It's"),
		word("like"),
		word("five"),
		word("pools"),
		word("all"),
		word("in")
	),
	div(
		{ class: "line" },
		word("one, ’cause"),
		word("there"),
		word("are"),
		word("special"),
		word("parts"),
		word("of"),
		word("the"),
		word("pool")
	),
	div(
		{ class: "line" },
		word("for"),
		word("different"),
		word("types"),
		word("of"),
		word("things."),
		word("There's"),
		word("the")
	),
	div(
		{ class: "line" },
		word("bullpen,"),
		word("which"),
		word("is"),
		word("my"),
		word("favorite,"),
		word("where"),
		word("only")
	),
	div(
		{ class: "line" },
		word("boys"),
		word("are"),
		word("allowed."),
		word("If"),
		word("a"),
		word("girl"),
		word("gets"),
		word("caught"),
		word("in")
	),
	div(
		{ class: "line" },
		word("there"),
		word("she"),
		word("gets"),
		word("thrown"),
		word("out,"),
		word("and"),
		word("can't"),
		word("come")
	),
	div(
		{ class: "line" },
		word("back"),
		word("for"),
		word("a"),
		word("day."),
		word("Then"),
		word("there's"),
		word("the"),
		word("six"),
		word("foot")
	),
	div(
		{ class: "line" },
		word("where"),
		word("all"),
		word("the"),
		word("codgers"),
		word("and"),
		word("old"),
		word("ladies"),
		word("do")
	),
	div(
		{ class: "line" },
		word("laps—the"),
		word("jackbox"),
		word("where"),
		word("most"),
		word("of"),
		word("the"),
		word("girls")
	),
	div(
		{ class: "line" },
		word("hang"),
		word("out’cause"),
		word("there's"),
		word("a"),
		word("bar"),
		word("there"),
		word("where"),
		word("they")
	),
	div(
		{ class: "line" },
		word("can"),
		word("do"),
		word("somersaults"),
		word("and"),
		word("stuff—and"),
		word("finally"),
		word("a")
	),
	div(
		{ class: "line" },
		word("baby"),
		word("and"),
		word("toddler"),
		word("pool"),
		word("which,"),
		word("rumor"),
		word("has"),
		word("it,")
	),
	div(
		{ class: "line" },
		word("is"),
		word("two"),
		word("part"),
		word("water"),
		word("and"),
		word("one"),
		word("part"),
		word("urine.")
	)
);
export const page8 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Anyway,"),
		word("it"),
		word("was"),
		word("Crazy"),
		word("Charlie"),
		word("that"),
		word("got"),
		word("me")
	),
	div(
		{ class: "line" },
		word("goin'"),
		word("makin'"),
		word("all"),
		word("these"),
		word("weird"),
		word("noises—'cause")
	),
	div(
		{ class: "line" },
		word("before"),
		word("that"),
		word("I"),
		word("never"),
		word("did"),
		word("anything."),
		word("I"),
		word("started")
	),
	div(
		{ class: "line" },
		word("makin'"),
		word("fun"),
		word("of"),
		word("him"),
		word("like"),
		word("everyone"),
		word("else,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("then"),
		word("one"),
		word("time"),
		word("he"),
		word("looked"),
		word("at"),
		word("me,"),
		word("like"),
		word("I"),
		word("was"),
		word("the")
	),
	div(
		{ class: "line" },
		word("one"),
		word("who"),
		word("started"),
		word("all"),
		word("of"),
		word("it,"),
		word("and"),
		word("barked"),
		word("right"),
		word("at")
	),
	div(
		{ class: "line" },
		word("me."),
		word("Well,"),
		word("the"),
		word("only"),
		word("thing"),
		word("I"),
		word("could"),
		word("do"),
		word("was"),
		word("bark")
	),
	div(
		{ class: "line" },
		word("right"),
		word("back,"),
		word("and"),
		word("when"),
		word("I"),
		word("did,"),
		word("my"),
		word("friends"),
		word("all")
	),
	div(
		{ class: "line" },
		word("laughed"),
		word("real"),
		word("hard,"),
		word("and"),
		word("patted"),
		word("me"),
		word("on"),
		word("the")
	),
	div(
		{ class: "line" },
		word("back"),
		word("like"),
		word("it"),
		word("was"),
		word("a"),
		word("real"),
		word("good"),
		word("one"),
		word("or"),
		word("somethin'.")
	)
);
export const page9 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The"),
		word("thing"),
		word("that"),
		word("I"),
		word("remember"),
		word("though,"),
		word("is"),
		word("when")
	),
	div(
		{ class: "line" },
		word("Crazy"),
		word("Charlie"),
		word("was"),
		word("lookin'"),
		word("at"),
		word("me—it"),
		word("was"),
		word("like")
	),
	div(
		{ class: "line" },
		word("he"),
		word("musta'"),
		word("been"),
		word("thinking"),
		word("of"),
		word("how"),
		word("either"),
		word("he")
	),
	div(
		{ class: "line" },
		word("hoped"),
		word("we"),
		word("all"),
		word("got"),
		word("the"),
		word("barks"),
		word("so"),
		word("that"),
		word("we"),
		word("would")
	),
	div(
		{ class: "line" },
		word("stop"),
		word("laughing,"),
		word("or"),
		word("that"),
		word("maybe"),
		word("he"),
		word("was"),
		word("hopin'")
	),
	div(
		{ class: "line" },
		word("that"),
		word("we"),
		word("would"),
		word("never"),
		word("get ’em,"),
		word("because"),
		word("it")
	),
	div(
		{ class: "line" },
		word("seemed"),
		word("to"),
		word("bother"),
		word("him"),
		word("a"),
		word("lot."),
		word("Ever"),
		word("since"),
		word("that")
	),
	div(
		{ class: "line" },
		word("day"),
		word("I've"),
		word("been"),
		word("doin'"),
		word("the"),
		word("barks"),
		word("and"),
		word("twitches"),
		word("a")
	),
	div(
		{ class: "line" },
		word("lot,"),
		word("and"),
		word("I"),
		word("think"),
		word("maybe"),
		word("he"),
		word("gave’em"),
		word("to"),
		word("me")
	),
	div(
		{ class: "line" },
		word("when"),
		word("he"),
		word("looked"),
		word("right"),
		word("at"),
		word("me"),
		word("and"),
		word("I"),
		word("barked")
	),
	div(
		{ class: "line" },
		word("back"),
		word("at"),
		word("him."),
		word("My"),
		word("mom"),
		word("says"),
		word("that's"),
		word("ridiculous,")
	),
	div(
		{ class: "line" },
		word("but"),
		word("she"),
		word("wasn't"),
		word("there"),
		word("to"),
		word("see"),
		word("the"),
		word("look"),
		word("Crazy")
	),
	div(
		{ class: "line" },
		word("Charlie"),
		word("gave"),
		word("me."),
		word("It"),
		word("wasn't"),
		word("like"),
		word("an"),
		word("adult")
	),
	div(
		{ class: "line" },
		word("look—it"),
		word("was"),
		word("the"),
		word("look"),
		word("some"),
		word("kid"),
		word("gives"),
		word("you")
	),
	div(
		{ class: "line" },
		word("after"),
		word("you've"),
		word("made"),
		word("fun"),
		word("of"),
		word("him,"),
		word("like"),
		word("he"),
		word("really")
	),
	div(
		{ class: "line" },
		word("hates"),
		word("you,"),
		word("and"),
		word("would"),
		word("like"),
		word("to"),
		word("kill"),
		word("you"),
		word("right")
	),
	div(
		{ class: "line" },
		word("there"),
		word("on"),
		word("the"),
		word("spot.")
	)
);
export const page10 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("In"),
		word("the"),
		word("bullpen"),
		word("there's"),
		word("this"),
		word("big"),
		word("guy"),
		word("that")
	),
	div(
		{ class: "line" },
		word("likes"),
		word("to"),
		word("launch"),
		word("me"),
		word("into"),
		word("the"),
		word("air"),
		word("like"),
		word("a"),
		word("missile.")
	),
	div(
		{ class: "line" },
		word("That's"),
		word("what"),
		word("they"),
		word("call"),
		word("me"),
		word("and"),
		word("my"),
		word("friends,")
	),
	div(
		{ class: "line" },
		word("missiles, ’cause"),
		word("they"),
		word("take"),
		word("one"),
		word("of"),
		word("our"),
		word("feet"),
		word("in")
	),
	div(
		{ class: "line" },
		word("their"),
		word("cupped"),
		word("hands"),
		word("and"),
		word("launch"),
		word("us"),
		word("through")
	),
	div(
		{ class: "line" },
		word("the"),
		word("air"),
		word("to"),
		word("see"),
		word("how"),
		word("high"),
		word("they"),
		word("can"),
		word("throw"),
		word("us.")
	),
	div(
		{ class: "line" },
		word("Abe"),
		word("is"),
		word("the"),
		word("best"),
		word("launcher—he's"),
		word("the"),
		word("biggest")
	),
	div(
		{ class: "line" },
		word("human"),
		word("being"),
		word("I've"),
		word("ever"),
		word("seen,"),
		word("and"),
		word("when"),
		word("he")
	),
	div(
		{ class: "line" },
		word("launches"),
		word("me"),
		word("I"),
		word("can"),
		word("see"),
		word("over"),
		word("the"),
		word("fence"),
		word("of"),
		word("the")
	),
	div(
		{ class: "line" },
		word("club"),
		word("all"),
		word("the"),
		word("way"),
		word("to"),
		word("the"),
		word("steeple"),
		word("of")
	),
	div(
		{ class: "line" },
		word("Meridian"),
		word("Street"),
		word("Methodist"),
		word("Church."),
		word("My")
	),
	div(
		{ class: "line" },
		word("friends"),
		word("don't"),
		word("believe"),
		word("me,"),
		word("but"),
		word("it's"),
		word("true—I")
	),
	div(
		{ class: "line" },
		word("mean,"),
		word("it's"),
		word("not"),
		word("like"),
		word("I"),
		word("can"),
		word("prove"),
		word("it"),
		word("or")
	),
	div(
		{ class: "line" },
		word("anything—but"),
		word("I"),
		word("can"),
		word("see"),
		word("the"),
		word("steeple,"),
		word("and"),
		word("the")
	),
	div(
		{ class: "line" },
		word("Baskin"),
		word("Robbins"),
		word("sign"),
		word("right"),
		word("over"),
		word("the"),
		word("canal")
	),
	div(
		{ class: "line" },
		word("behind"),
		word("Rivi."),
		word("I'm"),
		word("probably"),
		word("the"),
		word("lightest"),
		word("one"),
		word("out")
	),
	div(
		{ class: "line" },
		word("of"),
		word("all"),
		word("my"),
		word("friends,"),
		word("and"),
		word("that's"),
		word("why"),
		word("I"),
		word("go"),
		word("the")
	),
	div(
		{ class: "line" },
		word("highest."),
		word("The"),
		word("funny"),
		word("thing"),
		word("is"),
		word("though,"),
		word("whenever")
	),
	div(
		{ class: "line" },
		word("I'm"),
		word("a"),
		word("missile"),
		word("I"),
		word("never"),
		word("get"),
		word("the"),
		word("urge"),
		word("to"),
		word("twitch"),
		word("or")
	),
	div(
		{ class: "line" },
		word("bark—"),
		word("I"),
		word("guess"),
		word("it's"),
		word("just"),
		word("because"),
		word("I'm"),
		word("too"),
		word("busy")
	),
	div(
		{ class: "line" },
		word("worrying"),
		word("about"),
		word("the"),
		word("flips"),
		word("and"),
		word("somersaults")
	),
	div(
		{ class: "line" },
		word("that"),
		word("I'm"),
		word("gonna'"),
		word("do."),
		word("One"),
		word("time"),
		word("when"),
		word("Abe")
	),
	div(
		{ class: "line" },
		word("launched"),
		word("me"),
		word("I"),
		word("did"),
		word("three"),
		word("somersaults"),
		word("before"),
		word("I")
	),
	div(
		{ class: "line" },
		word("straightened"),
		word("out"),
		word("for"),
		word("a"),
		word("perfect"),
		word("dive"),
		word("into"),
		word("the")
	),
	div(
		{ class: "line" },
		word("water."),
		word("I'm"),
		word("thinking"),
		word("I'll"),
		word("tell"),
		word("this"),
		word("to"),
		word("that"),
		word("doctor")
	),
	div(
		{ class: "line" },
		word("I'm"),
		word("gonna'"),
		word("see"),
		word("today,"),
		word("since"),
		word("that"),
		word("is"),
		word("practically")
	),
	div(
		{ class: "line" },
		word("the"),
		word("only"),
		word("time"),
		word("that"),
		word("I"),
		word("don't"),
		word("do"),
		word("it.")
	)
);
export const page11 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("On"),
		word("the"),
		word("way"),
		word("to"),
		word("Riley"),
		word("Hospital"),
		word("my"),
		word("mom"),
		word("keeps")
	),
	div(
		{ class: "line" },
		word("tellin'"),
		word("me"),
		word("that"),
		word("it's"),
		word("not"),
		word("a"),
		word("psychiatrist"),
		word("that"),
		word("I'm")
	),
	div(
		{ class: "line" },
		word("gonna'"),
		word("see—but"),
		word("a"),
		word("neurologist,"),
		word("whatever"),
		word("the")
	),
	div(
		{ class: "line" },
		word("hell"),
		word("that's"),
		word("supposed"),
		word("to"),
		word("be."),
		word("She"),
		word("knows"),
		word("that"),
		word("I")
	),
	div(
		{ class: "line" },
		word("don't"),
		word("like"),
		word("crazy"),
		word("people,"),
		word("and"),
		word("that"),
		word("they"),
		word("are"),
		word("the")
	),
	div(
		{ class: "line" },
		word("only"),
		word("people"),
		word("who"),
		word("truly"),
		word("scare"),
		word("me—more"),
		word("than")
	),
	div(
		{ class: "line" },
		word("the"),
		word("weird"),
		word("things"),
		word("I"),
		word("hear"),
		word("in"),
		word("my"),
		word("room"),
		word("at"),
		word("night")
	),
	div(
		{ class: "line" },
		word("when"),
		word("I'm"),
		word("praying"),
		word("to"),
		word("Jesus"),
		word("to"),
		word("protect"),
		word("me"),
		word("from")
	),
	div(
		{ class: "line" },
		word("them."),
		word("I"),
		word("remember"),
		word("I"),
		word("used"),
		word("to"),
		word("be"),
		word("really"),
		word("scared")
	),
	div(
		{ class: "line" },
		word("of"),
		word("them"),
		word("when"),
		word("I"),
		word("was"),
		word("little,"),
		word("at"),
		word("least"),
		word("until"),
		word("I"),
		word("got")
	),
	div(
		{ class: "line" },
		word("my"),
		word("first"),
		word("communion"),
		word("at"),
		word("church."),
		word("After"),
		word("that"),
		word("I")
	),
	div(
		{ class: "line" },
		word("figured"),
		word("I"),
		word("was"),
		word("off"),
		word("limits"),
		word("to"),
		word("the"),
		word("monsters"),
		word("since")
	),
	div(
		{ class: "line" },
		word("I"),
		word("ate"),
		word("holy"),
		word("wafers"),
		word("on"),
		word("a"),
		word("weekly"),
		word("basis."),
		word("But"),
		word("Crazy")
	),
	div(
		{ class: "line" },
		word("Charlie"),
		word("doesn't"),
		word("count"),
		word("as"),
		word("a"),
		word("crazy"),
		word("person"),
		word("to")
	),
	div(
		{ class: "line" },
		word("me—because"),
		word("it's"),
		word("not"),
		word("like"),
		word("he's"),
		word("a"),
		word("psycho"),
		word("or")
	),
	div(
		{ class: "line" },
		word("anything,"),
		word("he"),
		word("just"),
		word("does"),
		word("funny"),
		word("twitches"),
		word("and")
	),
	div(
		{ class: "line" },
		word("weird"),
		word("noises—not"),
		word("like"),
		word("the"),
		word("guys"),
		word("downtown")
	),
	div(
		{ class: "line" },
		word("who"),
		word("talk"),
		word("to"),
		word("themselves"),
		word("and"),
		word("look"),
		word("like"),
		word("they're")
	),
	div(
		{ class: "line" },
		word("about"),
		word("to"),
		word("kill"),
		word("somebody"),
		word("or"),
		word("somethin'."),
		word("Those")
	),
	div(
		{ class: "line" },
		word("guys"),
		word("are"),
		word("creepy,"),
		word("and"),
		word("I"),
		word("try"),
		word("clear"),
		word("of"),
		word("them")
	),
	div(
		{ class: "line" },
		word("whenever"),
		word("me"),
		word("and"),
		word("my"),
		word("mom"),
		word("go"),
		word("downtown"),
		word("to")
	),
	div({ class: "line" }, word("the"), word("post"), word("office."))
);
export const page12 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("When"),
		word("we"),
		word("get"),
		word("to"),
		word("the"),
		word("hospital"),
		word("I"),
		word("have"),
		word("to"),
		word("sit"),
		word("in")
	),
	div(
		{ class: "line" },
		word("this"),
		word("waiting"),
		word("room"),
		word("that"),
		word("is"),
		word("made"),
		word("for"),
		word("little")
	),
	div(
		{ class: "line" },
		word("kids—there"),
		word("is"),
		word("a"),
		word("box"),
		word("of"),
		word("toys"),
		word("and"),
		word("a"),
		word("pile"),
		word("of")
	),
	div(
		{ class: "line" },
		word("children's"),
		word("books."),
		word("I'm"),
		word("gettin'"),
		word("sorta'"),
		word("nervous")
	),
	div(
		{ class: "line" },
		word("though,"),
		word("because"),
		word("my"),
		word("mom"),
		word("says"),
		word("I"),
		word("might"),
		word("have")
	),
	div(
		{ class: "line" },
		word("this"),
		word("disease,"),
		word("and"),
		word("I"),
		word("don't"),
		word("want"),
		word("to"),
		word("have"),
		word("it."),
		word("I")
	),
	div(
		{ class: "line" },
		word("figure"),
		word("that"),
		word("if"),
		word("I"),
		word("can"),
		word("stop"),
		word("twitching"),
		word("while"),
		word("I'm")
	),
	div(
		{ class: "line" },
		word("with"),
		word("the"),
		word("doctor,"),
		word("that"),
		word("he"),
		word("won't"),
		word("think"),
		word("I"),
		word("have"),
		word("it.")
	),
	div(
		{ class: "line" },
		word("I"),
		word("mean,"),
		word("I"),
		word("don't"),
		word("really"),
		word("care"),
		word("if"),
		word("I"),
		word("have"),
		word("it—but"),
		word("my")
	),
	div(
		{ class: "line" },
		word("mom,"),
		word("she"),
		word("gets"),
		word("all"),
		word("worried"),
		word("about"),
		word("it,"),
		word("like"),
		word("that")
	),
	div(
		{ class: "line" },
		word("one"),
		word("time"),
		word("she"),
		word("cried"),
		word("when"),
		word("my"),
		word("teachers"),
		word("at")
	),
	div(
		{ class: "line" },
		word("school"),
		word("said"),
		word("they"),
		word("might"),
		word("take"),
		word("further")
	),
	div(
		{ class: "line" },
		word("action,"),
		word("and,"),
		word("there's"),
		word("one"),
		word("thing"),
		word("in"),
		word("the"),
		word("world")
	),
	div(
		{ class: "line" },
		word("that"),
		word("I"),
		word("can't"),
		word("stand,"),
		word("and"),
		word("that's"),
		word("my"),
		word("mom"),
		word("crying.")
	),
	div(
		{ class: "line" },
		word("It's"),
		word("like"),
		word("I"),
		word("have"),
		word("to"),
		word("cry"),
		word("just"),
		word("because"),
		word("my"),
		word("mom's")
	),
	div(
		{ class: "line" },
		word("crying."),
		word("I"),
		word("don't"),
		word("even"),
		word("have"),
		word("to"),
		word("know"),
		word("what"),
		word("it's")
	),
	div(
		{ class: "line" },
		word("about—I"),
		word("start"),
		word("in"),
		word("right"),
		word("along"),
		word("with"),
		word("her,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("ask"),
		word("her"),
		word("why"),
		word("she"),
		word("has"),
		word("to"),
		word("bawl"),
		word("when"),
		word("she")
	),
	div(
		{ class: "line" },
		word("knows"),
		word("it"),
		word("makes"),
		word("me"),
		word("sad.")
	)
);
export const page13 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("So"),
		word("anyway,"),
		word("I'm"),
		word("not"),
		word("a"),
		word("cry-baby"),
		word("or"),
		word("anything,")
	),
	div(
		{ class: "line" },
		word("it's"),
		word("just"),
		word("that"),
		word("one"),
		word("thing"),
		word("that"),
		word("does"),
		word("it"),
		word("to"),
		word("me")
	),
	div(
		{ class: "line" },
		word("every"),
		word("time."),
		word("So"),
		word("I'm"),
		word("thinking"),
		word("I'll"),
		word("hold"),
		word("in"),
		word("the")
	),
	div(
		{ class: "line" },
		word("urges"),
		word("to"),
		word("bark"),
		word("and"),
		word("twitch"),
		word("for"),
		word("at"),
		word("least"),
		word("a"),
		word("few")
	),
	div(
		{ class: "line" },
		word("minutes"),
		word("while"),
		word("the"),
		word("doctor's"),
		word("seein'"),
		word("me."),
		word("That")
	),
	div(
		{ class: "line" },
		word("way"),
		word("he"),
		word("won't"),
		word("think"),
		word("I"),
		word("have"),
		word("it,"),
		word("and"),
		word("my"),
		word("mom")
	),
	div(
		{ class: "line" },
		word("won't"),
		word("have"),
		word("anything"),
		word("to"),
		word("get"),
		word("all")
	),
	div({ class: "line" }, word("worked-up"), word("about."))
);
export const page14 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("But"),
		word("in"),
		word("the"),
		word("waiting"),
		word("room"),
		word("I'm"),
		word("really"),
		word("going"),
		word("at"),
		word("it")
	),
	div(
		{ class: "line" },
		word("since"),
		word("the"),
		word("doctor's"),
		word("nowhere"),
		word("in"),
		word("sight."),
		word("I"),
		word("pick"),
		word("up")
	),
	div(
		{ class: "line" },
		word("this"),
		word("book"),
		word("I"),
		word("remember"),
		word("having"),
		word("when"),
		word("I"),
		word("was"),
		word("a")
	),
	div(
		{ class: "line" },
		word("kid,"),
		word("The"),
		word("Cat"),
		word("In"),
		word("The"),
		word("Hat,"),
		word("and"),
		word("start"),
		word("reading"),
		word("it")
	),
	div(
		{ class: "line" },
		word("to"),
		word("get"),
		word("my"),
		word("mind"),
		word("off"),
		word("the"),
		word("whole"),
		word("situation.")
	),
	div(
		{ class: "line" },
		word("Only"),
		word("the"),
		word("urges"),
		word("are"),
		word("really"),
		word("coming"),
		word("at"),
		word("me"),
		word("now,")
	),
	div(
		{ class: "line" },
		word("since"),
		word("I've"),
		word("got"),
		word("this"),
		word("great"),
		word("plan"),
		word("to"),
		word("hold’em"),
		word("all")
	),
	div(
		{ class: "line" },
		word("in"),
		word("when"),
		word("the"),
		word("doctor"),
		word("shows"),
		word("up."),
		word("I'm"),
		word("flipping")
	),
	div(
		{ class: "line" },
		word("my"),
		word("head"),
		word("back"),
		word("and"),
		word("forth"),
		word("and"),
		word("can"),
		word("barely")
	),
	div(
		{ class: "line" },
		word("even"),
		word("read—I'm"),
		word("stomping"),
		word("my"),
		word("feet,")
	),
	div(
		{ class: "line" },
		word("trying"),
		word("to"),
		word("get"),
		word("my"),
		word("toes"),
		word("through"),
		word("the"),
		word("soles"),
		word("of")
	),
	div(
		{ class: "line" },
		word("my"),
		word("shoes."),
		word("If"),
		word("I"),
		word("could,"),
		word("I'd"),
		word("curl"),
		word("my"),
		word("toes"),
		word("right")
	),
	div(
		{ class: "line" },
		word("through"),
		word("the"),
		word("carpet"),
		word("and"),
		word("into"),
		word("the"),
		word("floor")
	),
	div(
		{ class: "line" },
		word("underneath."),
		word("I'm"),
		word("grunting"),
		word("every"),
		word("other"),
		word("second,")
	),
	div(
		{ class: "line" },
		word("louder"),
		word("each"),
		word("time,"),
		word("and"),
		word("can't"),
		word("seem"),
		word("to"),
		word("get")
	),
	div({ class: "line" }, word("it"), word("right."))
);
export const page15 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("That's"),
		word("the"),
		word("thing"),
		word("about"),
		word("it—it's"),
		word("like"),
		word("once")
	),
	div(
		{ class: "line" },
		word("you"),
		word("start"),
		word("in"),
		word("on"),
		word("it,"),
		word("you've"),
		word("got"),
		word("to"),
		word("get"),
		word("it"),
		word("right.")
	),
	div(
		{ class: "line" },
		word("Just"),
		word("like"),
		word("Crazy"),
		word("Charlie"),
		word("and"),
		word("his"),
		word("Olympic")
	),
	div(
		{ class: "line" },
		word("dives—if"),
		word("it's"),
		word("off"),
		word("by"),
		word("just"),
		word("a"),
		word("little"),
		word("bit"),
		word("you've"),
		word("got")
	),
	div(
		{ class: "line" },
		word("to"),
		word("do"),
		word("it"),
		word("again."),
		word("Especially"),
		word("with"),
		word("the"),
		word("barks—at")
	),
	div(
		{ class: "line" },
		word("first"),
		word("everyone"),
		word("can"),
		word("barely"),
		word("hear"),
		word("it,"),
		word("but"),
		word("then"),
		word("I")
	),
	div(
		{ class: "line" },
		word("think"),
		word("that"),
		word("they"),
		word("didn't"),
		word("hear"),
		word("it,"),
		word("and"),
		word("so"),
		word("I"),
		word("have")
	),
	div(
		{ class: "line" },
		word("to"),
		word("do"),
		word("it"),
		word("again—but"),
		word("then"),
		word("I"),
		word("think"),
		word("that"),
		word("surely")
	),
	div(
		{ class: "line" },
		word("they"),
		word("didn't"),
		word("hear"),
		word("that"),
		word("one"),
		word("either,"),
		word("and"),
		word("so"),
		word("on,")
	),
	div(
		{ class: "line" },
		word("until"),
		word("the"),
		word("whole"),
		word("class"),
		word("is"),
		word("staring"),
		word("at"),
		word("me"),
		word("and"),
		word("I'm")
	),
	div(
		{ class: "line" },
		word("yanked"),
		word("outta'"),
		word("the"),
		word("class"),
		word("by"),
		word("Sister"),
		word("Agatha"),
		word("and")
	),
	div(
		{ class: "line" },
		word("sent"),
		word("to"),
		word("the"),
		word("principal's"),
		word("office.")
	)
);
export const page16 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I"),
		word("don't"),
		word("really"),
		word("wanna'"),
		word("look"),
		word("up"),
		word("at"),
		word("my"),
		word("mom")
	),
	div(
		{ class: "line" },
		word("now,"),
		word("’cause"),
		word("I'm"),
		word("really"),
		word("having"),
		word("a"),
		word("fit,"),
		word("but"),
		word("when"),
		word("I")
	),
	div(
		{ class: "line" },
		word("do"),
		word("she"),
		word("is"),
		word("just"),
		word("staring"),
		word("at"),
		word("me"),
		word("like"),
		word("she"),
		word("usually")
	),
	div(
		{ class: "line" },
		word("does,"),
		word("smiling,"),
		word("like"),
		word("what"),
		word("I'm"),
		word("doing"),
		word("is"),
		word("the"),
		word("most")
	),
	div(
		{ class: "line" },
		word("normal"),
		word("thing"),
		word("in"),
		word("the"),
		word("world.")
	)
);
export const page17 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Luckily"),
		word("there's"),
		word("no"),
		word("one"),
		word("else"),
		word("in"),
		word("the")
	),
	div(
		{ class: "line" },
		word("room—I"),
		word("mean,"),
		word("if"),
		word("there"),
		word("was"),
		word("a"),
		word("little"),
		word("kid"),
		word("in"),
		word("the")
	),
	div(
		{ class: "line" },
		word("room"),
		word("I'd"),
		word("really"),
		word("be"),
		word("feelin'"),
		word("stupid—'cause")
	),
	div(
		{ class: "line" },
		word("sometimes"),
		word("little"),
		word("kids"),
		word("look"),
		word("at"),
		word("me"),
		word("and"),
		word("then"),
		word("go")
	),
	div(
		{ class: "line" },
		word("over"),
		word("to"),
		word("their"),
		word("mom"),
		word("like"),
		word("they're"),
		word("afraid"),
		word("of"),
		word("me")
	),
	div({ class: "line" }, word("or"), word("somethin'."))
);
export const page18 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The"),
		word("urges"),
		word("are"),
		word("coming"),
		word("from"),
		word("all"),
		word("over,"),
		word("and"),
		word("I")
	),
	div(
		{ class: "line" },
		word("can't"),
		word("remember"),
		word("when"),
		word("I've"),
		word("been"),
		word("so"),
		word("bad"),
		word("with")
	),
	div(
		{ class: "line" },
		word("it—but"),
		word("then"),
		word("the"),
		word("doctor"),
		word("comes"),
		word("in"),
		word("and")
	),
	div(
		{ class: "line" },
		word("introduces"),
		word("himself"),
		word("to"),
		word("me,"),
		word("and"),
		word("not"),
		word("to"),
		word("my")
	),
	div(
		{ class: "line" },
		word("mom,"),
		word("which"),
		word("I"),
		word("think"),
		word("is"),
		word("sorta'"),
		word("weird"),
		word("since"),
		word("she"),
		word("is")
	),
	div(
		{ class: "line" },
		word("right"),
		word("there"),
		word("next"),
		word("to"),
		word("me."),
		word("Adults"),
		word("are"),
		word("always")
	),
	div(
		{ class: "line" },
		word("doin'"),
		word("weird"),
		word("stuff"),
		word("like"),
		word("that"),
		word("when"),
		word("I'm"),
		word("around.")
	),
	div(
		{ class: "line" },
		word("They're"),
		word("always"),
		word("taking"),
		word("me"),
		word("aside"),
		word("and"),
		word("asking,")
	),
	div(
		{ class: "line" },
		word("“How"),
		word("are"),
		word("you,"),
		word("Brandt?"),
		word("Is"),
		word("everything"),
		word("okay?“")
	),
	div(
		{ class: "line" },
		word("like"),
		word("I'm"),
		word("some"),
		word("kind"),
		word("of"),
		word("retard"),
		word("or"),
		word("something.")
	),
	div(
		{ class: "line" },
		word("Not"),
		word("that"),
		word("I"),
		word("have"),
		word("anything"),
		word("against"),
		word("retards,")
	),
	div(
		{ class: "line" },
		word("but"),
		word("it's"),
		word("like"),
		word("I'm"),
		word("not"),
		word("retarded—I"),
		word("just"),
		word("twitch")
	),
	div(
		{ class: "line" },
		word("and"),
		word("stuff,"),
		word("which"),
		word("isn't"),
		word("the"),
		word("same"),
		word("thing"),
		word("at"),
		word("all.")
	),
	div(
		{ class: "line" },
		word("Just"),
		word("like"),
		word("Crazy"),
		word("Charlie"),
		word("really"),
		word("isn't"),
		word("crazy.")
	)
);
export const page19 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("The"),
		word("doctor"),
		word("asks"),
		word("me"),
		word("to"),
		word("follow"),
		word("him"),
		word("down"),
		word("the"),
		word("hall")
	),
	div(
		{ class: "line" },
		word("to"),
		word("his"),
		word("office"),
		word("where"),
		word("we"),
		word("can"),
		word("talk,"),
		word("and"),
		word("I'm")
	),
	div(
		{ class: "line" },
		word("waiting"),
		word("for"),
		word("my"),
		word("mom"),
		word("to"),
		word("come"),
		word("with"),
		word("us"),
		word("but")
	),
	div(
		{ class: "line" },
		word("she"),
		word("stays"),
		word("behind."),
		word("The"),
		word("doctor"),
		word("tells"),
		word("me"),
		word("he"),
		word("just")
	),
	div(
		{ class: "line" },
		word("wants"),
		word("to"),
		word("talk"),
		word("to"),
		word("me"),
		word("for"),
		word("a"),
		word("minute."),
		word("We're")
	),
	div(
		{ class: "line" },
		word("walking"),
		word("down"),
		word("the"),
		word("hall"),
		word("and"),
		word("I'm"),
		word("really"),
		word("about")
	),
	div(
		{ class: "line" },
		word("to"),
		word("explode’"),
		word("cause"),
		word("it's"),
		word("like"),
		word("there's"),
		word("all"),
		word("this")
	),
	div(
		{ class: "line" },
		word("energy"),
		word("going"),
		word("through"),
		word("me"),
		word("like"),
		word("I've"),
		word("just"),
		word("been")
	),
	div(
		{ class: "line" },
		word("electrocuted—not"),
		word("that"),
		word("I've"),
		word("ever"),
		word("been")
	),
	div(
		{ class: "line" },
		word("electrocuted"),
		word("before,"),
		word("but"),
		word("I'm"),
		word("thinking"),
		word("this"),
		word("is")
	),
	div(
		{ class: "line" },
		word("what"),
		word("it"),
		word("would"),
		word("feel"),
		word("like"),
		word("if"),
		word("I"),
		word("was."),
		word("I'm"),
		word("sweating")
	),
	div(
		{ class: "line" },
		word("by"),
		word("the"),
		word("time"),
		word("we"),
		word("make"),
		word("it"),
		word("to"),
		word("his"),
		word("office,"),
		word("which"),
		word("is")
	),
	div(
		{ class: "line" },
		word("like"),
		word("ten"),
		word("miles"),
		word("down"),
		word("the"),
		word("hall,"),
		word("and"),
		word("he"),
		word("asks"),
		word("me")
	),
	div(
		{ class: "line" },
		word("again"),
		word("if"),
		word("everything's"),
		word("all"),
		word("right.")
	)
);
export const page20 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“I'm"),
		word("fine,”"),
		word("I"),
		word("say.")
	)
);
export const page21 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“And"),
		word("are"),
		word("you"),
		word("holding"),
		word("back"),
		word("on"),
		word("anything?")
	),
	div(
		{ class: "line" },
		word("Is"),
		word("this"),
		word("how"),
		word("you"),
		word("usually"),
		word("act?“"),
		word("he"),
		word("asks.")
	)
);
export const page22 = section(
	{ class: "page" },
	div({ class: "line" }, word("“Yes.”"))
);
export const page23 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“Are"),
		word("you"),
		word("feeling"),
		word("the"),
		word("urge"),
		word("to"),
		word("make"),
		word("noises,"),
		word("or")
	),
	div({ class: "line" }, word("shake"), word("your"), word("head?”"))
);
export const page24 = section(
	{ class: "page" },
	div({ class: "line" }, word("“No.”"))
);
export const page25 = section(
	{ class: "page" },
	div({ class: "line" }, word("“Anything"), word("like"), word("that?”"))
);
export const page26 = section(
	{ class: "page" },
	div({ class: "line" }, word(`“No.”`))
);
export const page27 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Only"),
		word("inside"),
		word("I'm"),
		word("fighting"),
		word("the"),
		word("itches"),
		word("like"),
		word("a")
	),
	div(
		{ class: "line" },
		word("madman,"),
		word("and"),
		word("think"),
		word("maybe"),
		word("I'm"),
		word("not"),
		word("going"),
		word("to")
	),
	div({ class: "line" }, word("make"), word("it."))
);
export const page28 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“It's"),
		word("just"),
		word("sorta'"),
		word("hot"),
		word("in"),
		word("here,"),
		word("that's"),
		word("all,”"),
		word("I"),
		word("say,")
	),
	div(
		{ class: "line" },
		word("’cause"),
		word("I'm"),
		word("thinking"),
		word("he"),
		word("can"),
		word("see"),
		word("me"),
		word("sweating.")
	)
);
export const page29 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("He"),
		word("says"),
		word("then"),
		word("that"),
		word("that's"),
		word("all"),
		word("he"),
		word("wanted"),
		word("to")
	),
	div(
		{ class: "line" },
		word("know"),
		word("and"),
		word("takes"),
		word("me"),
		word("back"),
		word("to"),
		word("my"),
		word("mom."),
		word("They")
	),
	div(
		{ class: "line" },
		word("are"),
		word("talking"),
		word("right"),
		word("there"),
		word("in"),
		word("front"),
		word("of"),
		word("me,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("just"),
		word("when"),
		word("I"),
		word("think"),
		word("he's"),
		word("gonna'"),
		word("let"),
		word("us"),
		word("go"),
		word("he"),
		word("asks")
	),
	div(
		{ class: "line" },
		word("me"),
		word("to"),
		word("go"),
		word("down"),
		word("to"),
		word("the"),
		word("drinking"),
		word("fountain"),
		word("to")
	),
	div(
		{ class: "line" },
		word("get"),
		word("a"),
		word("sip"),
		word("of"),
		word("water.")
	)
);
export const page30 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“I'm"),
		word("not"),
		word("thirsty,”"),
		word("I"),
		word("tell"),
		word("him.")
	)
);
export const page31 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“Go"),
		word("on"),
		word("anyway,"),
		word("I"),
		word("have"),
		word("to"),
		word("talk"),
		word("to"),
		word("your")
	),
	div(
		{ class: "line" },
		word("mother"),
		word("for"),
		word("a"),
		word("minute,”"),
		word("he"),
		word("says.")
	)
);
export const page32 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("And"),
		word("I'm"),
		word("thinking,"),
		word("yeah,"),
		word("like"),
		word("this"),
		word("isn't"),
		word("a"),
		word("test.")
	),
	div(
		{ class: "line" },
		word("This"),
		word("guy"),
		word("is"),
		word("trying"),
		word("to"),
		word("make"),
		word("me"),
		word("do"),
		word("something,")
	),
	div(
		{ class: "line" },
		word("but"),
		word("the"),
		word("urges"),
		word("are"),
		word("starting"),
		word("to"),
		word("calm"),
		word("down"),
		word("a")
	),
	div(
		{ class: "line" },
		word("bit"),
		word("and"),
		word("so"),
		word("I"),
		word("walk"),
		word("real"),
		word("cool"),
		word("like"),
		word("down"),
		word("to"),
		word("the")
	),
	div(
		{ class: "line" },
		word("drinking"),
		word("fountain"),
		word("and"),
		word("feel"),
		word("the"),
		word("eyes"),
		word("of"),
		word("that")
	),
	div(
		{ class: "line" },
		word("doctor"),
		word("on"),
		word("my"),
		word("back,"),
		word("watching"),
		word("me"),
		word("like"),
		word("a"),
		word("hawk.")
	),
	div(
		{ class: "line" },
		word("When"),
		word("I"),
		word("return"),
		word("without"),
		word("making"),
		word("a"),
		word("single"),
		word("jerk,")
	),
	div(
		{ class: "line" },
		word("I'm"),
		word("smiling"),
		word("like"),
		word("I'm"),
		word("in"),
		word("on"),
		word("his"),
		word("secret"),
		word("test,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("he"),
		word("tells"),
		word("me"),
		word("I"),
		word("can"),
		word("go"),
		word("home"),
		word("now.")
	)
);
export const page33 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Right"),
		word("when"),
		word("we"),
		word("walk"),
		word("out"),
		word("the"),
		word("front"),
		word("door"),
		word("to")
	),
	div(
		{ class: "line" },
		word("the"),
		word("hospital"),
		word("I"),
		word("let"),
		word("out"),
		word("a"),
		word("nice"),
		word("big"),
		word("bark"),
		word("and"),
		word("snap")
	),
	div(
		{ class: "line" },
		word("my"),
		word("head"),
		word("right"),
		word("over"),
		word("to"),
		word("my"),
		word("mom"),
		word("to"),
		word("see"),
		word("if"),
		word("she")
	),
	div(
		{ class: "line" },
		word("heard"),
		word("it,"),
		word("but"),
		word("she"),
		word("doesn't"),
		word("look"),
		word("at"),
		word("me"),
		word("and")
	),
	div(
		{ class: "line" },
		word("keeps"),
		word("on"),
		word("goin'"),
		word("like"),
		word("nothing"),
		word("happened.")
	)
);
export const page34 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("On"),
		word("the"),
		word("way"),
		word("home"),
		word("I"),
		word("ask"),
		word("her"),
		word("if"),
		word("I"),
		word("have"),
		word("the"),
		word("barks")
	),
	div(
		{ class: "line" },
		word("and"),
		word("what"),
		word("the"),
		word("doctor"),
		word("had"),
		word("said"),
		word("about"),
		word("me."),
		word("She")
	),
	div(
		{ class: "line" },
		word("tells"),
		word("me"),
		word("that"),
		word("I"),
		word("do"),
		word("have"),
		word("them"),
		word("and"),
		word("that"),
		word("we're")
	),
	div(
		{ class: "line" },
		word("goin'"),
		word("to"),
		word("the"),
		word("pharmacy"),
		word("to"),
		word("get"),
		word("some"),
		word("medicine")
	),
	div(
		{ class: "line" },
		word("that'll"),
		word("make"),
		word("it"),
		word("all"),
		word("better."),
		word("I"),
		word("turn"),
		word("to"),
		word("face"),
		word("her")
	),
	div(
		{ class: "line" },
		word("and"),
		word("tell"),
		word("her"),
		word("that"),
		word("I"),
		word("hadn't"),
		word("budged"),
		word("during"),
		word("the")
	),
	div(
		{ class: "line" },
		word("whole"),
		word("test,"),
		word("that"),
		word("I"),
		word("knew"),
		word("about"),
		word("the"),
		word("test,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("that"),
		word("I"),
		word("hadn't"),
		word("done"),
		word("anything"),
		word("at"),
		word("all."),
		word("Then"),
		word("she")
	),
	div(
		{ class: "line" },
		word("starts"),
		word("to"),
		word("cry,"),
		word("tears"),
		word("running"),
		word("down"),
		word("to"),
		word("the")
	),
	div(
		{ class: "line" },
		word("corners"),
		word("of"),
		word("her"),
		word("mouth,"),
		word("and"),
		word("she"),
		word("starts")
	),
	div(
		{ class: "line" },
		word("rubbing"),
		word("the"),
		word("back"),
		word("of"),
		word("my"),
		word("neck.")
	)
);
export const page35 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("“The"),
		word("waiting"),
		word("room,"),
		word("Brandt,”"),
		word("she"),
		word("says."),
		word("“He")
	),
	div(
		{ class: "line" },
		word("was"),
		word("watching"),
		word("you"),
		word("in"),
		word("the"),
		word("waiting"),
		word("room.”")
	)
);
export const page36 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("And"),
		word("I'm"),
		word("thinking"),
		word("that"),
		word("was"),
		word("a"),
		word("dirty"),
		word("trick.")
	)
);
export const page37 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I"),
		word("end"),
		word("up"),
		word("taking"),
		word("this"),
		word("expensive"),
		word("medicine"),
		word("for"),
		word("a")
	),
	div(
		{ class: "line" },
		word("week,"),
		word("but"),
		word("all"),
		word("it"),
		word("does"),
		word("is"),
		word("make"),
		word("me"),
		word("sleep"),
		word("almost")
	),
	div(
		{ class: "line" },
		word("all"),
		word("day"),
		word("in"),
		word("school"),
		word("and"),
		word("my"),
		word("mom"),
		word("says"),
		word("that's"),
		word("not")
	),
	div(
		{ class: "line" },
		word("going"),
		word("to"),
		word("work,"),
		word("and"),
		word("I'm"),
		word("sorta"),
		word("happy,"),
		word("because")
	),
	div(
		{ class: "line" },
		word("sleeping"),
		word("all"),
		word("day"),
		word("is"),
		word("not"),
		word("the"),
		word("sort"),
		word("of"),
		word("thing"),
		word("that")
	),
	div(
		{ class: "line" },
		word("I"),
		word("like"),
		word("doin'"),
		word("on"),
		word("a"),
		word("regular"),
		word("basis.")
	)
);
export const page38 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Tonight"),
		word("we're"),
		word("supposed"),
		word("to"),
		word("have"),
		word("a"),
		word("conference")
	),
	div(
		{ class: "line" },
		word("at"),
		word("school,"),
		word("and"),
		word("when"),
		word("me"),
		word("and"),
		word("my"),
		word("mom"),
		word("get")
	),
	div(
		{ class: "line" },
		word("there"),
		word("all"),
		word("the"),
		word("teachers"),
		word("are"),
		word("there"),
		word("at"),
		word("this"),
		word("big")
	),
	div(
		{ class: "line" },
		word("table,"),
		word("and"),
		word("I'm"),
		word("at"),
		word("the"),
		word("end"),
		word("of"),
		word("it"),
		word("like"),
		word("it's"),
		word("my")
	),
	div(
		{ class: "line" },
		word("birthday"),
		word("or"),
		word("something."),
		word("Sister"),
		word("Agatha"),
		word("says")
	),
	div(
		{ class: "line" },
		word("that"),
		word("she"),
		word("didn't"),
		word("know"),
		word("that"),
		word("the"),
		word("barks"),
		word("was"),
		word("a")
	),
	div(
		{ class: "line" },
		word("real"),
		word("disease,"),
		word("and"),
		word("how"),
		word("she"),
		word("really"),
		word("did"),
		word("believe"),
		word("I")
	),
	div(
		{ class: "line" },
		word("was"),
		word("trying"),
		word("to"),
		word("get"),
		word("my"),
		word("classmates"),
		word("to"),
		word("laugh.")
	),
	div(
		{ class: "line" },
		word("That"),
		word("sorta'"),
		word("made"),
		word("me"),
		word("feel"),
		word("good,"),
		word("like"),
		word("she"),
		word("was")
	),
	div(
		{ class: "line" },
		word("the"),
		word("one"),
		word("in"),
		word("the"),
		word("hot"),
		word("seat—I"),
		word("love"),
		word("watching")
	),
	div(
		{ class: "line" },
		word("adults"),
		word("get"),
		word("in"),
		word("trouble"),
		word("almost"),
		word("as"),
		word("much"),
		word("as")
	),
	div(
		{ class: "line" },
		word("getting"),
		word("into"),
		word("trouble"),
		word("myself."),
		word("But"),
		word("then"),
		word("all"),
		word("of")
	),
	div(
		{ class: "line" },
		word("them"),
		word("start"),
		word("apologizing"),
		word("to"),
		word("me,"),
		word("which"),
		word("is"),
		word("funny,")
	),
	div(
		{ class: "line" },
		word("because"),
		word("it's"),
		word("like"),
		word("a"),
		word("few"),
		word("weeks"),
		word("ago"),
		word("I"),
		word("was")
	),
	div(
		{ class: "line" },
		word("getting"),
		word("detentions"),
		word("for"),
		word("all"),
		word("the"),
		word("trouble"),
		word("I"),
		word("was")
	),
	div(
		{ class: "line" },
		word("causing"),
		word("and"),
		word("was"),
		word("approaching"),
		word("the"),
		word("all-time")
	),
	div(
		{ class: "line" },
		word("record"),
		word("for"),
		word("detentions"),
		word("in"),
		word("the"),
		word("entire"),
		word("history"),
		word("of")
	),
	div(
		{ class: "line" },
		word("the"),
		word("school."),
		word("I"),
		word("thought"),
		word("that"),
		word("was"),
		word("pretty"),
		word("cool,")
	),
	div(
		{ class: "line" },
		word("but"),
		word("my"),
		word("mom"),
		word("said"),
		word("that"),
		word("it"),
		word("wasn't"),
		word("something")
	),
	div(
		{ class: "line" },
		word("to"),
		word("be"),
		word("proud"),
		word("of,"),
		word("and"),
		word("that"),
		word("it"),
		word("wasn't"),
		word("like")
	),
	div(
		{ class: "line" },
		word("something"),
		word("I"),
		word("could"),
		word("put"),
		word("on"),
		word("my"),
		word("resume,")
	),
	div(
		{ class: "line" },
		word("whatever"),
		word("the"),
		word("hell"),
		word("that's"),
		word("supposed"),
		word("to"),
		word("mean.")
	)
);
export const page39 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I'm"),
		word("still"),
		word("sort"),
		word("of"),
		word("embarrassed"),
		word("about"),
		word("having"),
		word("a")
	),
	div(
		{ class: "line" },
		word("disease"),
		word("and"),
		word("all"),
		word("that,"),
		word("and"),
		word("tell"),
		word("them"),
		word("that"),
		word("I")
	),
	div(
		{ class: "line" },
		word("don't"),
		word("know"),
		word("what"),
		word("they're"),
		word("talking"),
		word("about—that")
	),
	div(
		{ class: "line" },
		word("I"),
		word("didn't"),
		word("know"),
		word("anything"),
		word("about"),
		word("any")
	),
	div(
		{ class: "line" },
		word("“syndrome,”"),
		word("all"),
		word("the"),
		word("while"),
		word("shaking"),
		word("my"),
		word("head")
	),
	div(
		{ class: "line" },
		word("even"),
		word("harder,"),
		word("hoping"),
		word("each"),
		word("time"),
		word("that"),
		word("they")
	),
	div(
		{ class: "line" },
		word("hadn't"),
		word("noticed"),
		word("the"),
		word("last"),
		word("jerk"),
		word("though"),
		word("they're")
	),
	div(
		{ class: "line" },
		word("looking"),
		word("straight"),
		word("at"),
		word("me."),
		word("Everyone"),
		word("starts")
	),
	div(
		{ class: "line" },
		word("staring"),
		word("real"),
		word("hard,"),
		word("like"),
		word("when"),
		word("I'm"),
		word("in"),
		word("trouble")
	),
	div(
		{ class: "line" },
		word("and"),
		word("they're"),
		word("trying"),
		word("to"),
		word("figure"),
		word("out"),
		word("how"),
		word("to"),
		word("get")
	),
	div(
		{ class: "line" },
		word("me"),
		word("to"),
		word("stop"),
		word("misbehaving."),
		word("Only"),
		word("it's"),
		word("really"),
		word("bad")
	),
	div(
		{ class: "line" },
		word("this"),
		word("time"),
		word("and"),
		word("I"),
		word("can't"),
		word("stop"),
		word("the"),
		word("noises"),
		word("and")
	),
	div(
		{ class: "line" },
		word("twitching,"),
		word("and"),
		word("my"),
		word("mom"),
		word("starts"),
		word("looking")
	),
	div(
		{ class: "line" },
		word("worried"),
		word("and"),
		word("tells"),
		word("me"),
		word("to"),
		word("settle"),
		word("down."),
		word("I"),
		word("keep")
	),
	div(
		{ class: "line" },
		word("hitting"),
		word("my"),
		word("knee"),
		word("under"),
		word("the"),
		word("table"),
		word("and")
	),
	div(
		{ class: "line" },
		word("everyone"),
		word("looks"),
		word("down"),
		word("at"),
		word("the"),
		word("table"),
		word("popping")
	),
	div(
		{ class: "line" },
		word("up"),
		word("and"),
		word("down,"),
		word("and"),
		word("then"),
		word("I'm"),
		word("shaking"),
		word("my"),
		word("head")
	),
	div(
		{ class: "line" },
		word("back"),
		word("and"),
		word("forth"),
		word("like"),
		word("crazy,"),
		word("and"),
		word("barking,"),
		word("and")
	),
	div(
		{ class: "line" },
		word("Sister"),
		word("Agatha"),
		word("stops"),
		word("talking"),
		word("to"),
		word("my"),
		word("mom")
	),
	div(
		{ class: "line" },
		word("about"),
		word("what"),
		word("times"),
		word("I'm"),
		word("supposed"),
		word("to"),
		word("take"),
		word("the")
	),
	div(
		{ class: "line" },
		word("medicine"),
		word("at"),
		word("school."),
		word("Everyone"),
		word("is"),
		word("looking"),
		word("back")
	),
	div(
		{ class: "line" },
		word("and"),
		word("forth"),
		word("between"),
		word("my"),
		word("mom"),
		word("and"),
		word("me,"),
		word("like")
	),
	div(
		{ class: "line" },
		word("they"),
		word("don't"),
		word("know"),
		word("what"),
		word("to"),
		word("do,"),
		word("and"),
		word("then")
	),
	div(
		{ class: "line" },
		word("Principal"),
		word("Cohen"),
		word("says"),
		word("that"),
		word("maybe"),
		word("my"),
		word("mom")
	),
	div(
		{ class: "line" },
		word("should"),
		word("take"),
		word("me"),
		word("home,"),
		word("but"),
		word("no"),
		word("one"),
		word("can"),
		word("hear")
	),
	div(
		{ class: "line" },
		word("him"),
		word("’cause"),
		word("I'm"),
		word("barking"),
		word("so"),
		word("loud,"),
		word("and"),
		word("finally"),
		word("I")
	),
	div(
		{ class: "line" },
		word("kick"),
		word("the"),
		word("table"),
		word("so"),
		word("hard"),
		word("that"),
		word("everyone's"),
		word("coffee")
	),
	div(
		{ class: "line" },
		word("mugs"),
		word("dump"),
		word("over"),
		word("onto"),
		word("the"),
		word("table"),
		word("and"),
		word("people")
	),
	div(
		{ class: "line" },
		word("start"),
		word("getting"),
		word("up"),
		word("out"),
		word("of"),
		word("their"),
		word("seats."),
		word("I"),
		word("finish"),
		word("it")
	),
	div(
		{ class: "line" },
		word("off"),
		word("like"),
		word("a"),
		word("real"),
		word("pro"),
		word("and"),
		word("start"),
		word("shaking"),
		word("all"),
		word("over")
	),
	div(
		{ class: "line" },
		word("like"),
		word("I've"),
		word("never"),
		word("shaked"),
		word("before"),
		word("and"),
		word("end"),
		word("up")
	),
	div(
		{ class: "line" },
		word("falling"),
		word("right"),
		word("outta'"),
		word("my"),
		word("chair.")
	)
);
export const page40 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("They're"),
		word("all"),
		word("looking"),
		word("at"),
		word("me"),
		word("like"),
		word("I've"),
		word("just"),
		word("been")
	),
	div(
		{ class: "line" },
		word("hit"),
		word("by"),
		word("a"),
		word("car"),
		word("or"),
		word("somethin',"),
		word("like"),
		word("this"),
		word("one"),
		word("time"),
		word("at")
	),
	div(
		{ class: "line" },
		word("school"),
		word("when"),
		word("this"),
		word("little"),
		word("girl"),
		word("got"),
		word("run"),
		word("over"),
		word("by"),
		word("a")
	),
	div(
		{ class: "line" },
		word("car"),
		word("at"),
		word("recess,"),
		word("and"),
		word("people"),
		word("came"),
		word("out"),
		word("of"),
		word("their")
	),
	div(
		{ class: "line" },
		word("houses"),
		word("and"),
		word("just"),
		word("stood"),
		word("there"),
		word("staring,")
	),
	div(
		{ class: "line" },
		word("wondering"),
		word("if"),
		word("the"),
		word("world"),
		word("was"),
		word("going"),
		word("to"),
		word("come")
	),
	div({ class: "line" }, word("to"), word("an"), word("end."))
);
export const page41 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("I"),
		word("mean,"),
		word("I"),
		word("kinda'"),
		word("feel"),
		word("sorry"),
		word("for"),
		word("them—'cause")
	),
	div(
		{ class: "line" },
		word("I"),
		word("know"),
		word("it's"),
		word("not"),
		word("like"),
		word("they're"),
		word("enjoying"),
		word("watching")
	),
	div(
		{ class: "line" },
		word("me"),
		word("have"),
		word("a"),
		word("fit."),
		word("Even"),
		word("Sister"),
		word("Agatha"),
		word("looks"),
		word("like")
	),
	div(
		{ class: "line" },
		word("maybe"),
		word("she's"),
		word("not"),
		word("having"),
		word("a"),
		word("good"),
		word("time,"),
		word("and"),
		word("has")
	),
	div(
		{ class: "line" },
		word("lost"),
		word("that"),
		word("evil"),
		word("look"),
		word("that"),
		word("she"),
		word("usually"),
		word("gives"),
		word("me")
	),
	div(
		{ class: "line" },
		word("when"),
		word("I"),
		word("turn"),
		word("around"),
		word("in"),
		word("church"),
		word("to"),
		word("see"),
		word("if"),
		word("she's")
	),
	div({ class: "line" }, word("spyin'"), word("on"), word("me."))
);
export const page42 = section(
	{ class: "page" },
	div(
		{ class: "line" },
		word("Me,"),
		word("I"),
		word("just"),
		word("wish"),
		word("I"),
		word("could"),
		word("be"),
		word("back"),
		word("in"),
		word("the"),
		word("bullpen")
	),
	div(
		{ class: "line" },
		word("with"),
		word("Abe"),
		word("so"),
		word("he"),
		word("could"),
		word("launch"),
		word("me"),
		word("nice"),
		word("and")
	),
	div(
		{ class: "line" },
		word("high—and"),
		word("then,"),
		word("right"),
		word("when"),
		word("I"),
		word("get"),
		word("that"),
		word("great")
	),
	div(
		{ class: "line" },
		word("view"),
		word("of"),
		word("the"),
		word("neighborhood,"),
		word("I"),
		word("can"),
		word("let"),
		word("out"),
		word("one")
	),
	div(
		{ class: "line" },
		word("last,"),
		word("perfect"),
		word("bark,"),
		word("and"),
		word("that"),
		word("maybe"),
		word("that'll"),
		word("be")
	),
	div({ class: "line" }, word("the"), word("end"), word("of"), word("it."))
);
