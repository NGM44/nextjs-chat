import { useMotionValue } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { useMotionTemplate, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardModel {
  name: string
  link: string
  logo: string
  description: string
}

export const EvervaultCard = ({
  value,
  text,
  className
}: {
  value: CardModel
  text?: string
  className?: string
}) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        'p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full">
              <img
                src={value.logo}
                className="w-24 h-24 p-2 rounded-lg mt-4 bg-gradient-to-br from-violet-100 via-purple-100 to-blue-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

export function EvervaultCardDemo() {
  const data = [
    {
      name: 'JIRAAF',
      link: 'jiraaf.com',
      logo: 'data:image/png;base64,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',
      description:
        'Online Bond Platform for High yield, fixed income investments'
    },
    {
      name: 'GRIP',
      link: 'gripinvest.in',
      logo: 'data:image/png;base64,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',
      description:
        'Make investments that provide: High returns of up to 16%* annually'
    },
    {
      name: 'Wintwealth',
      link: 'wintwealth.com',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEVTu1MAAAD///9TulNUvlQYOBhHn0dUv1RRt1FOsU55eXlPtE/s7OwHCAdLqksrYyv5+flIo0gGDwb09PQJFQkhTCFBlEEOIQ44fzhKqEoHEQcQJRAlVSUULxTc3NzV1dUmWSb1+/Uvay+Xl5c8iDzMzMwaGhoLGwsNDQ0oKCgcQBxnZ2dAkkAfRx8xcDE0dzQ2Njavr6+AgIBkwmTm9ea/v79YWFjF6MXS7dKa1pqJ0YlpxGnt+O0kJCR7e3tKSkqnp6en3ae+5b49PT1fX1+MjIx4yni04rSO0o6Y1phQUFC/5b+tN6cHAAAQsElEQVR4nO1dCVfizBIN6bBECBA2QfZFQGRRAVHQcUdn3v//Py/dEejqpJvlgZG83HO+851hmFi3q5eq21VRku1QHU1epvMhko4EaDifvkxGVTsukh29u8nnX0zwiBjO5tP7z8mdDUkLw+rd69/5MOi0zdtCwf8N5/evFo4Mw+roE09O03lH40JpaTAaTlmOkOHDZGouviMit4Jp+fBr8sBleHc/c9rKPQDNX0b2DKuv06FylM5jMZxO7Bg+fM6dtmwfMF00/3ywMBy9DKUjXX92mC0pLhg+EIIuwuyzChhWP11G0KD4WqUZvrpiDQKg+YRieDd12p4DAH2Nlgwf7l03RzGGL9VvhtXJTHHamv3DOBbmk6rJcOTGOWoAkXkqfe+jrjkIAfB+ajC8c98+ugCajgyG1VdXbjMmZhOD4eivO2cowfD+QXL1JDW205FUnRyP4LQ90PBOGn0GXbqREgRfpclfp404KJQX6cWlx/0CX9LUvRsNwVyau/g0xJhJS3XUpRhKxyPd7waX0/PgwYMHDx48ePDgwYMHDx48ePDgwYMHDx48ePDwfw8Fw2kj9g/zIlNRUFhV1WhUVcMh0gmDbwBddMkZ1jPZQT9moNYfZLuBnCoRbx4/Q+ykoBLt9gud4mkqYeCsdVr0pyu1bFcPK8Egd9YeCXfMT4o2Yv6U5gPQEqf+AmYZDZPlGWTgtOEbAmEPqoFYnqG3ZJkqpmuDbiag5/D6pBEOHYkPpZDBz5beColW0d9LFyoxGo2o05ZvAiQp4UYnsYbg0qMr+HzFxu93oWGhgvRa0X6CrkGqHz2GY1MJZSqnu/DzncUMgr/dicYMDTV6ZzsRbNVyR3FYhBv+nfj5WrHoryeIzVOtBNvNi6urq8dmW0gwEcsFjyCaU9RskbH84rJ+fV4ulc/Hzx+XT49cgoWA08avh7EG1T7cY9pP9XIkGSfdZvFkMlI6H9cv35rtNrvVnlX0o6ipVAfwmL84GUdkBpHS+Lp+cnsBOGqVwO9POBAKMlO0fftcIpQicYZlPDL+BximA8oR9GQHQ1mwyTRPxklZLl3fnNw8lxiOyesr2oOdTOjXT1GEjwngwcc/mFbp5krT2hcnZYbgEyDY/e30vkNR4MHHOl6BkfqFOWE/IlyCvk5X+vUHIX5RR7cD9hhCMH5++/3ntzG1ChmCjZDT1q8FQkqoCzz4dJ1kltvNyoNjQNBPCP5yFyIl3O1oVoJy8nnJ8GTpwfEtTbDYCP/6aBtLZ900TfDqOblYcG+Lzz6WBN/p6K2YDe+cL+02Ltv/KyzJZBiCi22FWofX7CcE+az67cEdzMVBkLIddlGCsGU6IHhRT64CmA8zENVuSuYH55eA4CC8etmOIjJXso3pVD2wBXQ9F1XDJHLacjz1Ak2wWacOhnj5sok/ez///uMJPUVPa9QuGsoJrVNtjAp1C/4t0OlgMTMQlbZdF7kKnfA2P2AkWnq+vL2sl82YpnzSpL7aqtGaRaYisq4SsBt2Ng5eD+2sVSw0VKzWbuZHJAVzBVpzuqizoXbciEu/py30YKsflcyfY0wcJZAWGVbMqvajW2ttSRGzzKcHgTCe+etJGt/QKyma4EdJ5qLEenC1Bo2ZLlI+8n17kVFRcrGU4N/xH1jIBkKbZTM6GMTHGxHBG0AwFl1sa8YmAseJxWmNI8HhodmNou80nY0qa05ifEzkanTG2/xT5hOMAIJaTF960PBERaSunooUKkWP7aZ7+fI1XbznEFEGeFA7EXgwUqcJnhX0xRwx1mCuJjIyVRNojHgFFzYVn9kHVzKhNRuO2gfr/FLkwTqt0GiFHDVQUeF2kajk1kymQG8n+dl4dKcRFj1YCWfBXn17LiJ4AQgGqOkR7Yv0Yw17WwCE70iE25QIxWyIN3wIp/Q0Qe39nNUqVkgCgr50QFrFasxEYJDCCpXQhTgYyqThRNXsYfN8P48itmxAp/Ttd4EHk89v1FcT6QwVgoXxY7hmnBFvr9vTDYpwol5d3pzY4PL26arpg/BzTlokQdWp/T7mezDCEpSoYVMHhQqFHnCoQVDaKLcKdXuAYT2SjFhROh8/37zTCpGPO1GDIahZ/BMQpJJEjF43RMtqYTW6hKrq4NbRGIyNFSooMSxSGQbxeDJSfn6HsnQxg+wOjQZ44CLjtX3q9Rt4XjcMph1NQAmBme8zvL0pQUWCOtgTf8iTpfoVlDIzVhkl1PXT33m75nswPv4H5wTi8CNiFti7isZ03jjNYe8TbkWzagzix4QxrSwEgQevhARBxmtsXVwb2Znvb4Q2T3Osaua/MdcoI4L8AHptj94acFqdAQQfnwVTFHrQzxVlyL0jsLBjGdg1FI3ji6HIH3jjgAYU8XqgXtTLaBZ1EUGoOmXVIHdlhaF9nQb3LOZRVOAB5rsUnNAMRWPTXo1nOAPiwDcRwfNLoDoNVL4Hw2Dma/7sLhJcFJ7Rl4IzmqWYDqBFrRYkuFKdbAnSC7o44EXQRK3r0Y/lncMikFRgQEeAmihSZkLlREE3kyklABKdiw8+QRl68FREUIJ6azEb3uWuzViLap9OF9uXgmxHjsAd9Tufi8JUVUSwBDSLVEy1z6kRiZ1B+U0qG971XVdG0k9H4e0/IoqlPzAnxwkPJNgWaxaQoKhSBsqRqZq6q0qM5QKQ9DdvBD6wkR1UMECaULMA45OqCZK8IJQjW/3o7iq/sWdFY3Rs29zGi7UMINgUpfRwdFK4zoJnkhQABPN93o67KUWoTjVFE43RN4s9IMqcCDaq0gedELYqumCTgXvXqUiz2BABRv8TTVSocNIQEowAgqmV6mQlqOhgUrVi4pR+I6DAGg0XUAT3DCu0RQED1Cxwksf3IFw1/MHYhiCrL4vCLuPUfrKVecQpPUwIAzwdAp8+MSDSxPSNlOh1UKQAyIgvBKGzLMPQ8hsi1clCUGAJlCN9a1SnTYHD+AyT/mxJUZBfynFGdcoIxKzwAMQP5mDs4UIYIbau4E1MEVb3+LQnQeoFPah1MoKBZqLIdGBv9904x4Nlyk/Xgu0m+Qy8Yrhc8F1QZ5EwcqAg12iYCSTSmT1W6iOSp9vVFqx3i1C0SF7TGW+i1+AoSfg+DcoORGPcb8lCeFO1zEhj4aHY5n43ef1GDxtO0213RnwOwoxcw1rJvksyQptJN0waS8zhnBXGWIAcSKBZsAPsbxyg+DII7x20f/Zn+PiSlYl9vEuY83cQYAqyWLZGjAzGnmGuBHDc3tqZXb61O/FtBQLGg4Sg/RxVpAyYP3lCcO8+JNs1uD2ymXwlbtTGDoelUoaXxZKUHnowGzpMdSk++vtgolqCzfIN72qOjbyN5crkQPy9H6pOvuLgYO2XOC4EFFnPwOzp7ZY+F5k7eybR6vM6C0hEBYLG4kA9aOVerkZThDfxZZABX9TPQUD2SGfPkGBeRJBR64qDgzZzkTvmFMfs0gcttzUNn8HM/XGVPcOx4NZOEN0wUKB/YP7AHsRHb64GiraW2gRMY03VqgQW2+Miey7dAOkxluPnSyiQpgm2SC/XIasvESn6oX7kUp1K3oBo9HvVQQXtu4aNKSSp8AgaPywYhZUTtUVd1GGhg59qmp0E1SHaUlotn1jqECMfQFmt6PxjIpiL0fzOKj/SUElq02gRDRehR55pq9vvqw2oDGKcq+cIrJRJFXgEMfQYUH5j6s/8lgODIqNO1csgnWjSEQxzG/FWB1dxKaEoA9XaFunl+gGC5McHQL3G1T/aakZ1ip/Tdcxas0lNW6HqpERBjdiZfUXlgQjiux/KUI3eTix1FnFb6QbDrLPgEDSiC5gQ8gbjMAzxvSfHbGtaFYf9BCv0MrxrTWQhSLrxftCJSEFQnRIQtLRMLEDal3jHhAriQ6ou6ocY4ncgNNjmSIwr+8QYlpCY8HcFxwSCmVoRE/xJhhIp87Tp4OVpMnELRa3YFTiFuaX3N5z5ZTgh9j0Bbb5AFbmGYnjC3xDc+jGqU6fhSNs9LhdgunhFOioM1czCe84aZJ6rmWWdP+5DbAli5qlA246P/wGBKtEjNWgWs/EHoQass2iEFSeafvEmGKjAWs9Hbr2GVYEj55vNYzFBts7CmV4uw4WZAlv3zi0btUqMOJ6xNNTjYyLUBau7mN35lv5/JhhI25SE29drlK0EzZIUuLwQQkElAMT1FiHowBTFl7EFq9EG7DoMSu+2XzVrsmHpIYKizGlt666jfSGox2yt9mnW6+zSCUeBS1nvqGEwmO/vX/ndCMZY57iNGZZ6DaDWaGf0vzObtdDyqRKc+fmDaxZ8wHqBVJ42m2lmgnUW+UKa/pd52N8C807S/OIEQcR29yQKWZCqXtEUmUKSmA6rRbCbloWa8PQRdvccFooKRFOtEAjpMSDHrGqnYJ0F2T5h4cNpXw0i89CA/VrkBTvOQGETGyONZeo1Hhf1GtbeEAMw78oPzLQhCGuTNNzd40wko6hMvYBOtjt4jDXNeg3mwrsXIDW/QXgPkc+GybiBfi0tvYdKmd3AENQ6C/UEboOksAgqcIn0sn0pA+Iy3KGtRGv0R2cF3aFzEEkhWBDRyyDzc1xRB9SpehJe6JuxNiLqLxuZNcIq2JwTFWcI4gBfZa7TGxKZuoi86gJ0Ez09P4M6i97qjSQGxQbowPBn+0zzy+a9xftlyF6nd6jLWITfnEf9XfuNLkNI0MX05qtN6L8t0u9MTDCdQD8IIyEEs6vTgFfv4QYIKpmxgE5RbWUe04PbtU7sD0iBqan5mhFq6klKqMsx28+UFuDpkOU0x3dw65QzxwTzypU806eGSKeObYNnvmFZVkhRBra9ksVte0P2iAwg2LJ9zQjTTrYw2q6hjS18WH738ExsgF3IXqdbu36xbeGsRWM030hiNVyJWil2CEFHSIbgO2UMgjb7OZIs3UT80gJL4cO36uRYvlRgUgLbpityZQTNJu1LHIaW7zqkWRAA0eJUFPejHG027x0V3wDv4jhwncUa0CcFaYjhjLR58dcCXxVBX6WLeW6z2g8AnwTLntQz/BYOriVkLS5upxPCrxL1MLeYHK2agwRNfB/nidh6BVM1k9kzUTHXN4JRczhS/e077PYJtOxLPSusWyzkAhens6azxW7BVQF4E2vVHLmcgCA3JlYd1wpE1MYUTvLWR9AI6xqJVC3H74j9ORgUe5XABpaQdDEW2+QVDmbpWqW2ftx+BmpG3zTuD+U27/cI6blf8zJEXgWazfeo/23y3d/gQA8ePHjw4MGDBw8ePHjw4MGDBw8ePHhwNX777/b6X4Gk4dBpGw6LoTSfOW3DYTGTpnOnbTgs5tLL1GkbDosvaXLvtA0HhfIijT6P4Vfq7gxlIlUnbt5M0fBOku9cvdVMR5I8unfxmY9eHiS5+uraaYqk2USWZHk0dacTccnB9AEzrH661YmK4ULMUB59uTT8RvcPJsPqZO7OYo/5nWwylB9eXDlPZ5/VBUNjs3HamgMA/R3JS4byxH3HvjK9kymG8qfr0sT5RAYMH9xGcfZahQwxRbckGfhYmL8+yAxDI3qbO9bMsW+g6aQqWxgax+LX0A1uNKLRv3crWhRD49B4mS87Qo8SpvXzz5HMYYjdOLP9rWLHAzS7v6vKXIZydfQ6nTnxups9YTib/ucBUmIY4qk6uZ8Pg0foSEUZTl8mDywfK0Pj4Bjdvb5M57Ph0bgSDWfzr5fJ3cjCT5b/C500o5MjSvvZAAAAAElFTkSuQmCC',
      description:
        'Invest in bonds with higher returns. SEBI Regulated | Start with just ₹10,000 today'
    },
    {
      name: 'Goldenpi',
      link: 'goldenpi.com/',
      logo: 'data:image/png;base64,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',
      description:
        'Get Fixed Returns With Sovereign Gold Bonds, NCD IPOs , CORPORATE FD'
    },
    {
      name: 'Stable Money',
      link: 'stablemoney.in/',
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADR0dE+Pj75+fn8/Pz29vY2Njba2trKysrr6+swMDAPDw+hoaFBQUHl5eVXV1dGRkaYmJhLS0smJiavr68fHx9iYmK1tbVycnKKioptbW3AwMB9fX2RkZEZGRkk/u86AAADyElEQVR4nO2caXeqMBRFIwIFLOJQlVq1//9fPqwdciFhCKx3Iuvsj+rqOtsMZLhVKUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCtREkxJBlSJ8812OSXbEuaSvb8uJuYlArnEu6lVFoszSqaY3mUZg1xUMrnLHjcBTC6zKWAuKttP7JLgXKqmOb/NxqWaz9KP6Vz0PhZedoDhk11W07isdJc4Xy0+/r9MpZNPIqM3RJjfH8YImep73Ix3CbW/Fz2+HoyMUsHL9C4wmSrAmKGz0vtYdFiAZaq1zdm5ddZiTv5xQcoolV6PTi574VL+vo7yeBCVLk+dvbld0DJVX8sHr3BqLtoGCSXxR7IbtsJZShe9o6IUNMJgSF87inVyKQYdykAQp/0bR+zFSrkJR+Wv03eFI1wutTdR4Zt89DnqEC5p/V1UdAPBpuupI9bJKmi8j0puIjxsWltnK+axRrv4JVNtDnZbu8u+y8Uzmarv3GyNsw70z6WfTyBT9TWzy1K6GNeoqMx2QqPLm+xjS+OHUJHtNCepO2Ies7h4KFOaYoqDl8Di4qHMucslsW5RUZHtNM86XkUfS+z7U1RkO43vfSXGfouLfzJRXUY+X+x9zEeZorYb2EqX1n0pKrOVVK42a+3SfniIymzlINYpL9Ll1Orin8xVT3eUY7/DxT8ZEVi4FJ1HBajMVvRRIZ6V2XuXi3cyhbahES5FVx/zUOZvbS/HS9bnOAoV2kb585iR81iPPuahzO57o7lO9Vfja7uFpzJXo4tpJf0EMo/utBQuWb928U4m/pqzVk7t4p3M10LyVYz9/i7eydyfmWJODm+9XXyTuY8Zsa8c4uKdjJLlY8Oq7UCRexIOq+VAx20lGliXgs7bytAaG3TeNgbXC6EDtzC89gmd2E7j0vbtdM0vgfEuw3sZbUH2ebodkiLL4nspk+XKw2+Z9L4ZOL7nlyKOQ60Qu6VoFRe2m8RcdGm6APRfxoJ9R4BO5oJ1DkAHc8G6KUAHcyJYz0hGWfYF6FhuFObpGR3LkZ1xDkCnciQ0lqWgU7lSmqpS0KGcMdUCoDM5Y/onKXQmdwzXAuhI7mRzklHNUyh0ohFkjVoNdKIxNOqf0IHGkNWvOdGBRuFvkbYD9Y0NOs84asdR6DjjiG4zklHBfkYyv1fts5ARR4LoMKPJP2ckE65nJPM4k56LjFrPSSaek4z6Kd86oYNMQfw9oaXdH30CHpdp57D7k09AfN4vTznsp4EmJgwC4K/pEEIIIYQQQgghhBBCCCGEEEIIIYSQPvwD404kv4YUPGAAAAAASUVORK5CYII=',
      description: 'Experience high-interest FDs like never before'
    }
  ]
  return (
    <div className="border border-white/[0.9] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto relative h-[30rem]">
      {data.map(ele => (
        <EvervaultCard value={ele} text="hover" />
      ))}
    </div>
  )
}
