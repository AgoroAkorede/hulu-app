import classes from './homepage-top.module.css'

function HomepageTop() {
    return (
        <div className={classes.main}>
            <div className={ classes.title }>
                <svg class="logo" viewBox="0 0 61 20" role="img" aria-labelledby="logoTitle"><title id="logoTitle">hulu</title><path fill-rule="evenodd" clip-rule="evenodd" d="M6.43658 6.24088H9.52263C12.568 6.24088 15 7.64811 15 11.3048V20H10.1882V11.9297C10.1882 11.2157 9.61239 10.6377 8.8997 10.6377H6.09974C5.38818 10.6377 4.8104 11.2157 4.8104 11.9297V20H0V0H4.8104V6.53351C4.8104 6.53351 5.35452 6.24088 6.43658 6.24088ZM42 20H37V0H42V20ZM27.8997 15.5262C28.612 15.5262 29.1886 14.9378 29.1886 14.2105V6H34V14.6201C34 17.7904 32.1981 19.9748 29.1886 19.9748V20H24.478C21.2108 20 19 18.1434 19 14.6201V6H23.8114V14.2105C23.8114 14.9378 24.3877 15.5262 25.1003 15.5262H27.8997ZM56.1885 6V14.2105C56.1885 14.9378 55.6121 15.5262 54.9 15.5262H52.1011C51.3884 15.5262 50.8121 14.9378 50.8121 14.2105V6H46V14.6201C46 18.1434 48.2106 20 51.4782 20H56.189V19.9748C59.1983 19.9748 61 17.7904 61 14.6201V6H56.1885Z"></path></svg>
            </div>
            <div className={classes.content}>
            <p className={classes.text}>BUNDLE WITH ANY HULU PLAN & SAVE</p>
                <div className={classes.logos}>
                   <img className={classes.logo_image} src='https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png' alt='logos' />
            </div>
            <p className={classes.page_title}>Get The endless entertainment, live sports, and the shows and movies you love.</p>
                <button className={classes.button}>Get The Disney Bundle</button>
                <p className={classes.special_text}>Sign up for Hulu only</p>
                </div>
        </div>
    )
}
export default HomepageTop