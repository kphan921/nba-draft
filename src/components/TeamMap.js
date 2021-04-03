const teamMap = {
    ATL: {
        name: "Atlanta Hawks",
        logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
        color: "rgb(162, 26, 29)"
    },
    BKN: {
        name: "Brooklyn Nets",
        logo: "https://cdn.nba.com/logos/nba/1610612751/primary/D/logo.svg",
        color: "rgb(0, 0, 0)",
    },
    BOS: {
        name: "Boston Celtics",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/D/logo.svg",
        color: "rgb(0, 105, 58)"
    },
    CHA: {
        name: "Charlotte Hornets",
        logo: "https://cdn.nba.com/logos/nba/1610612766/primary/D/logo.svg",
        color: "rgb(0, 96, 112)"
    },
    CHI: {
        name: "Chicago Bulls",
        logo: "https://cdn.nba.com/logos/nba/1610612741/primary/D/logo.svg",
        color: "rgb(165, 14, 52)"
    },
    CLE: {
        name: "Cleveland Cavaliers",
        logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
        color: "rgb(89, 30, 49)"
    },
    DAL: {
        name: "Dallas Mavericks",
        logo: "https://cdn.nba.com/logos/nba/1610612742/primary/D/logo.svg",
        color: "rgb(0, 66, 150)"
    },
    DET: {
        name: "Detroit Pistons",
        logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
        color: "rgb(23, 53, 110)"
    },
    DEN: {
        name: "Denver Nuggets",
        logo: "https://cdn.nba.com/logos/nba/1610612743/primary/D/logo.svg",
        color: "rgb(11, 27, 51)"
    },
    GSW: {
        name: "Golden State Warriors",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/D/logo.svg",
        color: "rgb(0, 86, 146)"
    },
    HOU: {
        name: "Houston Rockets",
        logo: "https://cdn.nba.com/logos/nba/1610612745/alt/logo.svg",
        color: "rgb(165, 14, 52)"
    },
    IND: {
        name: "Indiana Pacers",
        logo: "https://cdn.nba.com/logos/nba/1610612754/primary/D/logo.svg",
        color: "rgb(0, 36, 78)"
    },
    LAC: {
        name: "Los Angeles Clippers",
        logo: "https://cdn.nba.com/logos/nba/1610612746/primary/D/logo.svg",
        color: "rgb(160, 13, 37)"
    },
    LAL: {
        name: "Los Angeles Lakers",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/D/logo.svg",
        color: "rgb(68, 30, 105)"
    },
    MEM: {
        name: "Memphis Grizzlies",
        logo: "https://cdn.nba.com/logos/nba/1610612763/primary/D/logo.svg",
        color: "rgb(69, 89, 131)"
    },
    MIA: {
        name: "Miami Heat",
        logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        color: "rgb(122, 0, 37)"
    },
    MIL: {
        name: "Milwaukee Bucks",
        logo: "https://cdn.nba.com/logos/nba/1610612749/primary/D/logo.svg",
        color: "rgb(0, 57, 22)"
    },
    MIN: {
        name: "Minnesota Timberwolves",
        logo: "https://cdn.nba.com/logos/nba/1610612750/primary/D/logo.svg",
        color: "rgb(10, 28, 51)"
    },
    NOP: {
        name: "New Orleans Pelicans",
        logo: "https://cdn.nba.com/logos/nba/1610612740/primary/D/logo.svg",
        color: "rgb(0, 34, 74)"
    },
    NYK: {
        name: "New York Knicks",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        color: "rgb(0, 86, 146)"
    },
    OKC: {
        name: "Oklahoma City Thunder",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        color: "rgb(0, 98, 154)"
    },
    ORL: {
        name: "Orlando Magic",
        logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        color: "rgb(0, 95, 154)"
    },
    PHI: {
        name: "Philadelphia 76ers",
        logo: "https://cdn.nba.com/logos/nba/1610612755/alt/logo.svg",
        color: "rgb(0, 86, 146)"
    },
    PHX: {
        name: "Phoenix Suns",
        logo: "https://cdn.nba.com/logos/nba/1610612756/primary/D/logo.svg",
        color: "rgb(23, 14, 77)"
    },
    POR: {
        name: "Portland Trail Blazers",
        logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        color: "rgb(162, 26, 29)"
    },
    SAC: {
        name: "Sacramento Kings",
        logo: "https://cdn.nba.com/logos/nba/1610612758/primary/D/logo.svg",
        color: "rgb(72, 36, 103)"
    },
    SAS: {
        name: "San Antonio Spurs",
        logo: "https://cdn.nba.com/logos/nba/1610612759/primary/D/logo.svg",
        color: "rgb(0, 0, 0)"
    },
    TOR: {
        name: "Toronto Raptors",
        logo: "https://cdn.nba.com/logos/nba/1610612761/primary/D/logo.svg",
        color: "rgb(0, 0, 0)"
    },
    UTA: {
        name: "Utah Jazz",
        logo: "https://cdn.nba.com/logos/nba/1610612762/primary/D/logo.svg",
        color: "rgb(0, 34, 74)"
    },
    WAS: {
        name: "Washington Wizards",
        logo: "https://cdn.nba.com/logos/nba/1610612764/primary/D/logo.svg",
        color: "rgb(0, 34, 74)"
    },
    FA: {
        name: "Free Agent",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png",
        color: "rgb(127, 127, 127)"
    }
};

export default teamMap;