export const School = () => {
    return (
        <a href="https://www.saitama-u.ac.jp/" target="_blank">
            "埼玉大学"
        </a>
    )
}

export const Circle = () => {
    return (
        <a href="https://maximum.vc/" 
           target="_blank"
            rel="noreferrer noopener"
        >
            "Maximum"
        </a>
    )
}


export const Activity = () => {
    const AtCoder = () => {
      return (
        <a href="https://atcoder.jp/users/zerozero_00"
           target="_blank"
           rel="noreferrer noopener"
        >
          "AtCoder"
        </a>
      );
    };

    const CTF = () => {
      return (
        <a href="https://ctf.cpaw.site/" 
           target="_blank"
            rel="noreferrer noopener"  
        >
          "CTF"
        </a>
      );
    };

    return (
      <>
        <AtCoder />, 
        <CTF />, 
        "Web開発"
      </>
    );
}

export const BirthOfDate = () => {
    return (
            "2006/01/13"
    )
}

export const Hobby = () => {
    const MahjongSoul = () => {
        return(
            <a href="https://mahjongsoul.com/" 
               target="_blank"
               rel="noreferrer noopener"
            >
                雀魂 
            </a>
        )
    }

    const StarWars = () => {
        return (
          <a
            href="https://www.ea.com/ja-jp/games/starwars/galaxy-of-heroes"
            target="_blank"
            rel="noreferrer noopener"
          >
            "STARWARS" 
          </a>
        );
    }

    const Tokusatu = () => {
        return (
          <a href="https://www.toei.co.jp/" 
             target="_blank"
             rel="noreferrer noopener"   
          >
            "特撮"
          </a>
        );
    }

    return (
        <>
            <MahjongSoul />, 
            <StarWars />, 
            <Tokusatu />
        </>
    )
}