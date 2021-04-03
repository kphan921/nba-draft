const teamMap = {
    ATL: {
        name: "Atlanta Hawks",
        logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
        color: "rgb(200, 16, 46)",
        color2: "rgb(253, 185, 39)"
    },
    BKN: {
        name: "Brooklyn Nets",
        logo: "https://cdn.nba.com/logos/nba/1610612751/primary/D/logo.svg",
        color: "rgb(0, 0, 0)",
        color2: "rgb(255, 255, 255)"
    },
    BOS: {
        name: "Boston Celtics",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/D/logo.svg",
        color: "rgb(0, 131, 72)",
        color2: "rgb(187, 151, 83)"
    },
    CHA: {
        name: "Charlotte Hornets",
        logo: "https://cdn.nba.com/logos/nba/1610612766/primary/D/logo.svg",
        color: "rgb(0, 120, 140)",
        color2: "rgb(29, 17, 96)"
    },
    CHI: {
        name: "Chicago Bulls",
        logo: "https://cdn.nba.com/logos/nba/1610612741/primary/D/logo.svg",
        color: "rgb(206, 17, 65)",
        color2: "rgb(0, 0, 0)"
    },
    CLE: {
        name: "Cleveland Cavaliers",
        logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
        color: "rgb(111, 38, 61)",
        color2: "rgb(255, 184, 28)"
    },
    DAL: {
        name: "Dallas Mavericks",
        logo: "https://cdn.nba.com/logos/nba/1610612742/primary/D/logo.svg",
        color: "rgb(0, 100, 177)",
        color2: "rgb(187, 196, 202)"
    },
    DET: {
        name: "Detroit Pistons",
        logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
        color: "rgb(29, 66, 138)",
        color2: "rgb(200, 16, 46)"
    },
    DEN: {
        name: "Denver Nuggets",
        logo: "https://cdn.nba.com/logos/nba/1610612743/primary/D/logo.svg",
        color: "rgb(14, 34, 64)",
        color2: "rgb(254, 197, 36)"
    },
    GSW: {
        name: "Golden State Warriors",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/D/logo.svg",
        color: "rgb(29, 66, 138)",
        color2: "rgb(253, 185, 39)"
    },
    HOU: {
        name: "Houston Rockets",
        logo: "https://cdn.nba.com/logos/nba/1610612745/alt/logo.svg",
        color: "rgb(206, 17, 65)",
        color2: "rgb(0, 0, 0)"
    },
    IND: {
        name: "Indiana Pacers",
        logo: "https://cdn.nba.com/logos/nba/1610612754/primary/D/logo.svg",
        color: "rgb(0, 45, 98)",
        color2: "rgb(253, 187, 48)"
    },
    LAC: {
        name: "Los Angeles Clippers",
        logo: "https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg",
        color: "rgb(200, 16, 46)",
        color2: "rgb(29, 66, 138)"
    },
    LAL: {
        name: "Los Angeles Lakers",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg",
        color: "rgb(85, 37, 131)",
        color2: "rgb(253, 185, 39)"
    },
    MEM: {
        name: "Memphis Grizzlies",
        logo: "https://cdn.nba.com/logos/nba/1610612763/primary/D/logo.svg",
        color: "rgb(93, 118, 169)",
        color2: "rgb(18, 23, 63)"
    },
    MIA: {
        name: "Miami Heat",
        logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        color: "rgb(0, 0, 0)",
        color2: "rgb(152, 0, 46)"
    },
    MIL: {
        name: "Milwaukee Bucks",
        logo: "https://cdn.nba.com/logos/nba/1610612749/primary/D/logo.svg",
        color: "rgb(0, 71, 27)",
        color2: "rgb(238, 225, 198)"
    },
    MIN: {
        name: "Minnesota Timberwolves",
        logo: "https://cdn.nba.com/logos/nba/1610612750/primary/D/logo.svg",
        color: "rgb(12, 35, 64)",
        color2: "rgb(120, 190, 32)"
    },
    NOP: {
        name: "New Orleans Pelicans",
        logo: "https://cdn.nba.com/logos/nba/1610612740/primary/D/logo.svg",
        color: "rgb(10, 34, 64)",
        color2: "rgb(140, 115, 75)"
    },
    NYK: {
        name: "New York Knicks",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        color: "rgb(0, 107, 182)",
        color2: "rgb(245, 132, 38)"
    },
    OKC: {
        name: "Oklahoma City Thunder",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        color: "rgb(0, 122, 193)",
        color2: "rgb(239, 59, 36)"
    },
    ORL: {
        name: "Orlando Magic",
        logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        color: "rgb(0, 119, 192)",
        color2: "rgb(0, 0, 0)"
    },
    PHI: {
        name: "Philadelphia 76ers",
        logo: "https://cdn.nba.com/logos/nba/1610612755/alt/logo.svg",
        color: "rgb(0, 107, 182)",
        color2: "rgb(237, 23, 76)"
    },
    PHX: {
        name: "Phoenix Suns",
        logo: "https://cdn.nba.com/logos/nba/1610612756/primary/D/logo.svg",
        color: "rgb(23, 14, 77)",
        color2: "rgb(229, 96, 32)"
    },
    POR: {
        name: "Portland Trail Blazers",
        logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        color: "rgb(224, 58, 62)",
        color2: "rgb(0, 0, 0)"
    },
    SAC: {
        name: "Sacramento Kings",
        logo: "https://cdn.nba.com/logos/nba/1610612758/primary/D/logo.svg",
        color: "rgb(90, 45, 129)",
        color2: "rgb(99, 114, 122)"
    },
    SAS: {
        name: "San Antonio Spurs",
        logo: "https://cdn.nba.com/logos/nba/1610612759/primary/D/logo.svg",
        color: "rgb(0, 0, 0)",
        color2: "rgb(196, 206, 212)"
    },
    TOR: {
        name: "Toronto Raptors",
        logo: "https://cdn.nba.com/logos/nba/1610612761/primary/D/logo.svg",
        color: "rgb(0, 0, 0)",
        color2: "rgb(206, 17, 65)"
    },
    UTA: {
        name: "Utah Jazz",
        logo: "https://cdn.nba.com/logos/nba/1610612762/primary/D/logo.svg",
        color: "rgb(0, 43, 92)",
        color2: "rgb(249, 160, 27)"
    },
    WAS: {
        name: "Washington Wizards",
        logo: "https://cdn.nba.com/logos/nba/1610612764/primary/D/logo.svg",
        color: "rgb(0, 43, 92)",
        color2: "rgb(227, 24, 55)"
    },
    FA: {
        name: "Free Agent",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png",
        color: "rgb(127, 127, 127)",
        color2: "rgb(0, 0, 0)"
    }
};

export default teamMap;