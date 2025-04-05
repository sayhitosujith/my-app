import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Breadcrumbs,
  Rating,
  Switch
} from "@material-tailwind/react";

const data = [
  { id: 1, name: 'Veg Green Salad', src: 'https://i.ytimg.com/vi/ln_P2jNCSA0/maxresdefault.jpg', },
  { id: 2, name: 'Chole Meal', src: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/j/u/p5908-15671490325d68cbe8b52d8.jpg?tr=tr:n-xlarge', },
  { id: 3, name: 'Puliogre', src: 'https://www.harfieldtableware.co.uk/wp-content/uploads/2020/09/856BLU-for-website-scaled.jpg', },
  { id: 4, name: 'Veg combo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKfY4-8bnrTwpHepBSSHA1_nTNvDFM7WA6A&s', },
  { id: 5, name: 'Non-veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220', },
  { id: 6, name: 'Chicken biriyani', src: 'https://thumbs.dreamstime.com/b/meal-lunch-boxes-packaging-meal-lunch-boxes-isolated-white-background-121017730.jpg', },
  { id: 7, name: 'Veg salad', src: 'https://sammyapproves.com/wp-content/uploads/2019/08/028-min.jpg', },
  { id: 8, name: 'Rice & Curry', src: 'https://images-na.ssl-images-amazon.com/images/I/61HFT-GD82L._AC_SY450_.jpg', },
  { id: 9, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220', },
  { id: 10, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220', },
  { id: 11, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220', },
  { id: 12, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220', },
  { id: 13, name: 'veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220', },
  { id: 14, name: 'Lemon Rice', src: 'https://indiancurrytrail.com/wp-content/uploads/2019/03/Lunchbox-Idea-1-1.jpg', },
  { id: 15, name: 'Cure Rice', src: 'https://i.ytimg.com/vi/B2ZO4tN_8-c/sddefault.jpg', },

]

const CardItem = ({ item }) => (
  <Card className="w-96">
    <CardHeader
      variant="gradient"
      color="green"
      className="mb-5 grid h-10 place-items-center">
      <Typography variant="h3" color="white">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>


    <div className='flex justify-center items-center '>
      <img style={{ width: '200px', height: '200px' }} src={item.src}  />
    </div>
    <CardBody className="flex flex-col gap-4 ">
      <div className="-mr-50">
      </div>
      <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 object-cover rounded-full">
              <svg className="h-5 w-5" fill="red" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.638l-1.625-1.473C5.303 15.013 2 11.12 2 7.25 2 4.364 4.364 2 7.25 2c1.79 0 3.462 1.144 4.75 2.977C13.288 3.144 14.96 2 16.75 2 19.636 2 22 4.364 22 7.25c0 3.87-3.303 7.762-8.375 13.917L12 21.638z"/>
              </svg>
            </Typography>
    </CardBody>
    <CardFooter className="pt-0" >
      <Typography variant="h10" color="orange">
        <div>
          
        <b><hr class="separator" /></b>

          <button> <Typography variant="h6"> Discount - 5%</Typography></button>
          <b><hr class="separator" /></b>

        </div>
         <Rating value={4} readonly />

        <Checkbox label="Select Item" />
        {
          (
            <div className="w-72">
              <Select label="Select">
                <Option>Chapati & Chatni</Option>
                <Option>Poori & Saagu</Option>
                <Option>Masala Dosa & Saagu</Option>
                <Option>Idli and Uddina Vada</Option>

              </Select>
            </div>
          )}

        <br></br>

        <div className="w-72">
          <form class="max-w-sm mx-auto">
            <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Quantity:</label>
            <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </form>
        </div>
        <label>
        </label>
      </Typography>
    </CardFooter>
           

    <br></br>

    <Button color="orange" appearance="primary" className="text-lg font-semibold">
  <a href="/MyCart" className="flex items-center gap-10">
    <span>ADD TO CART</span>
    <span> - </span>
    <BsCart3 size={25} color="white" />

  </a>
</Button>


  </Card>

)

function App() {
  return (
    <div className="p-10">

      <Breadcrumbs>
        <a href="#" className="opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>

        <a href="#" className="opacity-60">
          <a href="/Welcome">
          Welcome 
               </a>    
        </a>
        <a href="#">Customer_Home</a>
      </Breadcrumbs>

<div className="mb-4 shadow-sm px-4 py-2 flex justify-center items-center bg-green-500 overflow-x-auto whitespace-nowrap">
  <Typography variant="h6" color="black" className="text-md inline-block"><i>
  <figure className="relative h-96 w-full">

  <img
      className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />

<figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Sara Lamalo
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Growth
        </Typography>
      </figcaption>
    </figure>

    NEW | 🛍️ Arrivals Alert! Fresh food,Deserts and must-have picks just dropped. Shop now before they're gone! 🔥✨!
    </i> </Typography>

  <IconButton color="white" variant="text" className="inline-block ml-4">
    ✖
  </IconButton>
</div>

<Typography variant="h3" color="orange" className="flex justify-center items-center gap-4">
  <img
    className="h-20 w-40 object-cover object-center"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABSlBMVEXw8PDxfzvkN0Tw8PHw8O7u8fDv8PHz8/Pw7/LiOESDg4Pw8fLkN0bz8PHkOEL19fXg4OCNjY3xfz3f39/v8e3wgTnlM0Hwfjb06N/jLDrreC+UlJTp6enu8vb19vLz7vHaKjjohEnxz7nxmGTNzc21tbWdnZ3u9/f24OP2fDj27+zeJDH02MXWOEXpo3fxvpzvxKvooafvdSn14tPvk2DGxsatra3wtZfpl2rmiE/qnXbyby7kciDlp3/yyMvoy8/cT1XptrfgaXblklPtp7b35+fjforZWmTpl5vfbnrZSlzXPU7rxM7tra/iiYzZWGbYd33SOz7ot7Ty7NvlkqLgm5b01tXlhYTuyMLeWVzTLkblbXfzxrb129DddITslWrqfknyvKTwekfusLrgejfaeHHYPVTquLHz1MbtzK30+efRX1/vr5j57dV+aqtNAAAQU0lEQVR4nO2d+VfbSLaAZUtllacsV0atxdJEJdnMjLBkYyzzHsuAWboNmC1JO3EWwiRMPP1Cuvv///XdklkCmIy7lZOE6fpOTo4BScifb91FMiBJAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBB8Hh5+7RO43zz42idwv/nua5/AvUYV+rKg/lX92qdwnxH6MiH0ZUL9H6EvA0JfJtS/CX0ZEPoyQf9Gv/Yp3GfU/xX6MiD0ZYIKfVmgfxf6MiD0ZULoy4TQlwn6F9E2Z0AV+rIg9GXjL1/7BO43Ql8mhL5M/Plrn8C95uGfRenIgNCXiYdi8WZB6MuE0JcJoS8TQl8mhL5MPPiEPlmSZfnLncp95C59nkHUCGCGh6Mve0r3iQd/mvRZmbDG4lJVry4vtToY/+FCEE274QR9BUlitZnEdW3bztl2stAIvc96ct88iEy75YTFq3iVlX/Y5picnrNX16Kpj3ffkbFCte76tJPs7ehTSGW5rnNzuVSfbtvu9xXlM5/mt0rBm21vxJu/Wx/EXtXWdT33MfZy5XOf5zeKthXEljPUptz8dvSx7yHlndu7lJjMsT9EAUEHsVUuB7PTbn9LH5qHksFXbqqvXh8/MN0a+mb1oXMkRZFl+B9JlFKNhmqBn7JcwLJcILAV/DMkLGlQHA2VYB5hioJC6vu+RhGvtyT8wcmXy00WptVDk1Ta6/X8EA46+Vvf0CejCiS73IW+XGv5/IH5PftG9WmRpmmUMgbGWKT5CibR5vbOztbu8APiPVgYUg2UEo/2DoY+1xdqswc9DToMKYy6u/29/f2Nx11NUrSDzZ/L5bLVPPyh3QXbanT4slks7h0NqT/5m9/Qh0nL/SjlVcM1+/yxWyPTJoQvCunu7z0Cdnbgv729IZbou33HKllOHB9pqqQOj7b7j54cENI7Kjrxox5CtLsTx0Fbk+XZ3WbsONyYE/d7Evs5KEHwWWXHiduhTw/2YSkXi5YT/EAn9x43F6+/YH+sj17qq6+oV/owgomuMMWTu9pGuR3+hetb/C4Ubdexrgh6HjuKyyn5kvOYIboJgpy4y4ZPYMO8s8vYbmzlS/l4SGg7LpVK+THx0zDaON+xVIq7iB1efTX+0Tcmffsb+rzBR8EHBfdKn7kc4YutNK2AsWd8spkpKJLvI+PSTkEiNzMIQhrPSCkYk4uHBiIkLEzZ+Gv0sVUE+HMsFiHph09jCKCyU86DhXgToU2oBeW4O1uyYKNi+SV75oCUYtHZRGQY8CgFvVzZk8gPUn0lrm82PIiLpXwJlANWsTdx7d3QZzRWr+nzLvXZSeVCH4x0v56cdIz0GaqQptU0LaqqxK8wqFSl/GqDVhkMOmNfskRI1Gk0Oiq5MghH4Z8y0mUhVzqdToU/UiQGDztk4os9Sd8erDaLP0mQ6DynJwFYKjWf71n8ue+wsM0XZ/zikcMF562X3biY50sU9Mlsr3h0MGto7RicxcPeKxAGqpr7T/aj3j5sng8eHztcZ/DjxLdSfXddH3p/PfrCtWSMu7x4EX0FUllygbkKNhTUWF5YWORlhZyuhR5C3uuFheUTLJGKa7srhCsOC6G2NoI9bH1xoJJxFiHkbMmGA9tL71WvIFVGes49gaJoGPNuPVn0pky0pNfkPOGRlXf6EX0EBqxXQ+Y3S8ViCaKxDd6sV8+dZjMNo5cb1n6pVCznQZ+kdSsUol4NuaN4HUWHMRwmGPq9Ht0F/2XnENPnPFqtf07Sp97QR67py1XDznyr1To7O6kwjM+fkTGo8lnYtJcHoG8Azc1oUJBkNlrtYAOxN649ilJ9kC9TVd6H2qieVnM7qXbGhyHRUmKfh3ULXhdvPsnV31CpEA7e/suuRmTaMVGBxsL3NwMrbzk7mjfkQea0Q4XBoi6VnC49gkVbLFnHUTdI05i1OV7vQVeVNKjKUcQitg2KgnVEjyDdFZs+5KaoCbtbL5lhHDg8JLcmDiI39TWSj/WZFTYmDJFxoU9u2bq96ppm0kKKoi7apvva98N5N1mD6DtxzfoarDzQZ9pz6ffEDTBZh0hbNe1kPo0rgy25pg7RBxHpvvE1yYiWbT2pEeydJnoyryn45pneCSmwFwEsX2evYmhPIdPl4wr2IXognwVdusVdWRtRuJ7qcw5D/znPdc1eAcOEdrwfBK929iFVNmclrQ8ayy9pQUbdAJas1WaGyvWVneOJ+m7kPh4zH1GvnjOz1jC0c310wbZHnUbVPdUURSEN1zaXIu/Dch0+i8JF13Q7CClX+ogPU2CuetppnI7AHubVxGu5MEuv1Rq1mWQpUgzZUGqunltmRkXPmVX4zPQXKTyvGzjlkrUx6yFtC/RZG0ZBg6iD5BccsA1Iivn4hcc2QZ+Vf0n9cIeXgz3VoLuBU0ordp7ri3zahBxoHfPC9Y6HcdCF9bXOH5W36KRLxzf7Pla1P/Zn23VOznbdxkX00appVgde41eMeTfC3kIADcIaDCvumoEXeL2GIspfiLE+79TV68sVD4p1ZT5M7amVXD2XzGPkeWpr4EGkYYUumaZ7Fi7CF2pYU+QJnc5ke8bJqyKEx/7QwJ66x/u2Hepj2oflDLkvCkCftUcx3YWYKwY/MpAE+qxjyh470Nw0jx/390plyIpMogHPnEc8HT7lS9ZZRxLb5Pqsx3TS1Hpz6qBz9dxE3NcX2ZyumJD3ThWW+pSNRVh1Lbpg8lE5atRzbguqS6rPTXOfOmebqzXVAH2eZ8DcBEW3lpj1udAzZIwpwTytIvQeXqXqYPS2vhCl89RU8rDszT6xmqWyM/QKBaTuWyBiJwSTTaiv1gYbxlBUnKch+OTNTNAzUA8SZdHZDTehJgdtFmp0GEAp6TO8zsu2s0kKEuP6rGBIZHjEG79DOP9b3/1m6VA8eGKT9dUu9EF+hNKR/AtKsSbDHh0IrjeQ3kxbr5+26nYygCcyjr4ViL4CD+hqVAhPGo3G+/eNAZIwXaxDpCE0aIzhJ4ajFVfXZ/Rc0iDTRh60+aT3E68RxRfMg8wbpeuyGcm46/De7lmYxo7zjiC2BxNEvqkh1k31bUJWzDtHoaFo9BDMgk/vgO8EHTNCrM2jDx6SaJ8fMu550+hDldEd+gbSefCisJXUbSgfy4MChmmCzZg5fSZn6tWcvrBs2zMMjfVB7mOwuCIzV1+OCnRp3ALViIRhieowBcILsbrquskyH9gNozOC6mzy/aEkSVPdpQJhGw4suODZcH19fThk/04Lxo9e76XF9c0y3rcUnXWMFJDGG0HE3kESLEJ3UgJ97xhkt+gniFmoKeG7sT5KD4wX0H1D10fptgPdonNE/cKEAenBTX13rF57gRUuQgKz9wtJbgQrmIE+BI0a70rcX854Oci58yHC59E3x2QY4EeQDiMULtmmqev1GobJetHl+jwex7oOx4aDGooHRdy2VxsQRfCtptGHjOgRHybABifeZf+XFsz4eB9SIASUB8+ef3WWGLPpV7ZhjGtbvA/u+ZAVrSPGtKjPi3N8IKc9YrH8U3//Fa08KfHhZWMjnV+KPXniDZBbF6zI+2SSPvdUVS6nNBSy93PQeLgND6KPx5kOK7dnvIXggWYHchm+KB2Q8NiMzYsxe5OsujloTjzIfWA6WQuNs1Xom03Qp0h8p0i3zdwKRWjaWzU+2nLy43mND6pOF/n7pSLvcmH0Kjs7EaaP0tXs8yXLt2gjRP8JNTn/MtI2YNU725ttiF+ubz302g6P2XLR2aJKOq3kLX6kYnBAJ98/uqWvgBfs2/Zsd0CMdI6CBMDmaxgxaD3qLQ9aF4nOQfjV1whZTGDtzXlpibrMfZ4KvUxuhRmDTgeacq5v/EW3Q6Ph8ATaINDHww1SInQ9772p73NJPoXxIR3XUpwhwsMgXwYDZasE9pAU8VnDekQJPeT64nchojugz+qHtM2vLThxHLf3obMLZhE+SEVCn/PUUNgOTMD8pSg7wSa74xW9pc9AjVX7kkt9S9B+p8HnebBy9QZjrRy0HojrwzXdNEcnWB5A3kxqKvQz45i0V7hzXOFLe6kTMQY9Iujj3c5c3cyNznrsQ2WmnuoDEHSDsH/Ir1NOrc/5iGIvktlwI3agh46bz6AtJbMO/6AfyvTIgVCK1wmBfeDBLkVsC7Z04qDdSy/KzIaY/Rzz/jvYGCID+dv8QLDB8SxNQ2fCWd3S5/tGbWZhYSZl4XLtNpAxLocFMrcKJbbKW+Gkw6/wSvhDFUypmoZ+sXPmB2jjFOlcH4bdsHGamHrdHVVH0GFD6YCvwuAHSS/RqyNTH13oS5vppAajqDalP+Q93j462h2zvX3kK4gQ/8VRv3+02WN8g/Xjf/f7W4eM+EfH/f7x1iwm/s/Hx8c7m5Ai/M3tLdjQGz571n7W9kMi+e8e97efQaExEMJ0eLjd77eHEHp3XV2adJuc0BA6NI/Cv/Mmur7ELoOXVJbT3kavJ29YepHcC9fqScdXFL/j2msMpRV+3PdhvpvhLSZ1fseO9+BJIw1O1qnClAENJGTL1aW077vQ9xtuiipGOlCGiE+VjBEoWUhCJPRxKI9PGDFKaYgUBGMc3xZpvgI7hFTl1/hD+FxIIGtcXDZCKqWMaj5/Wori8XnVu1h30+qTClFj/rTVOqtoI/s8+D7qedBgznVtt57MVdKMgDTjJFnhAYTQ3GpD8TF/awypQFlY8fg5+YWwseBCgwIj7lIDGi2OVlnT3ZRqy4ehF6XRl7i/SZ+UpsyUAhyAN0z8dgZvpxTDuHjFFUUmkqyMI3z8v0z4NQnEA/3qVol01aunH2gYloHGb5BId90nm6hPnUns1A9L9cGAcK1nJKwzv7h42rnIp5oUvTmBYIewqixEOD1ROJOz168bF6/beJfFWocgeFoc4oWD2ukvv7Qa0fjYsJPXOKu9rvzGW/LX9GG+7OQ0vq/rI2Nv53B9Pvd2U98F/CNtDF+5aS8xtT7SqqeXl8712aMKlq7tLnteGKpwpuM0pSkQ4Kk+hWmX+giMaOettgwREXrIgNfc4BeTU2TDCAkOtXGm06CDhLmBoOkvtVwD3Xwwff2e9sgTmKwvqqZ1d41VIfb0ZD68PkUpUuFmMPOv42uD6h354vqnYZUrVxUtPeg3eUPqLia/wwrVXB52S7++5al9hWnTD6F/LCbrM+iSC7XVTt/i4laQJuxN5uFEfVA3R+k7NHT9fOn+zoz0384d+iT/daKb/E0uyVx6UfSzJeL/Lu54a7hS8Fb4ZXvdXo4wL+5f+LTuC3e9s96QKlUefXpH+0bf2/JNcNfihRGAXzpwz5CRdhL3qp34ctz9cx04bLlJy5DH7y0S+ibyiR+LkenKCuUXqIW6O/nUTxXJvUi0y5/mP/5Q1tWboAS3EfoyIX4kMBNCXzbEr4LIhNCXBVXoy4Iqcl8WqNCXBfHbIzMh9GWC/l3oy4DQlwnxi4czIfRlQvzK/0wIfZkQ+jIh/thOJoS+TFDxl7KyIP7MXTaEviyI6MuE+Aup2RD6sqB+J/RlQfxt8kwIfZl48LVP4H7z8GufgEAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAcP/5f/GKDUSX23OzAAAAAElFTkSuQmC"
    alt="nature image"
  />

    
    
     <div className="flex gap-2">
  
          
        <div className="w-72">
              <Select label="Restaurant Status">
                <Option><Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="blue"size="sm"value="Busy" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="white"size="sm"value="Closed" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="red"size="sm"value="Out of Service" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
       </Select>
       
       
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
           
    <div class="inline-flex left">
    <Switch color="green" defaultChecked />
  <label htmlFor="desc" class="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none">
    <div>
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Veg
      </p>
    </div>
  </label>
</div>


<div class="relative flex w-full gap-2 md:w-max">
        <div class="relative h-10 w-full  min-w-[288px]">
          <input type="Enter Delivery Pincode" placeholder="Search for a Meal"
            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
        <div class="!absolute left-3 top-[13px]">
          <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
              fill="#CFD8DC"></path>
            <path
              d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
              stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      </div>


      <Button size="sm" color="green" className="flex items-center gap-3">
      <a href="/MyCart">
             My cart
               </a>        
               <IoCartOutline  size={25} color="white"/> </Button>

      <Button size="sm" color="green" className="flex items-center gap-4">
      <IoLogOutOutline size={20} color="white" />
      <a href="/my-app">
             Logout
               </a>    
      
</Button>
      </div>


     
<br></br>      
  <div style={{ float: 'right' }}>
  <div className="w-74">
      <Select label="Profile">
        
        <Option>    
        </Option>
    <Button>
    <a href="/MyCart">
               <CiWallet  size={20} color="white" /> My wallet 
               </a> 

    </Button>
       <Option>
       <a href="/HomePage">
             About 
               </a> 
       </Option>
       <Option>
       <a href="/ResetPassword">
             Change Password 
               </a> 
       </Option>
    
      </Select>
       </div>
        </div>
      </Typography>

 

      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(0, 5).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(6, 11).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(12, 15).map((item) => <CardItem item={item} />)
        }
      </div>
    </div>

  );



}


export default App;



