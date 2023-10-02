import { Auction, AuctionFinished } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { numberWithCommas } from "../util/numberWithComma"

type Props = {
    finsishedAuction: AuctionFinished
    auction: Auction
}

export default function AuctionFinishedToast({auction, finsishedAuction}: Props) {
  return (
    <Link href={`/auctions/details/${auction.id}`} className='flex flex-col items-center'>
        <div className="flex flex-row items-center gap-2">
            <Image 
                src={auction.imageUrl}
                alt="image"
                height={80}
                width={80}
                className='rounded-lg w-auto h-auto' />

                <div className='flex flex-col'>
                    <span>Auction for {auction.make} {auction.model} has finished</span>
                    {finsishedAuction.itemSold && finsishedAuction.amount ? (
                        <p>Congrats to {finsishedAuction.winner} who has won this auction for 
                            $${numberWithCommas(finsishedAuction.amount)}</p>
                    ) : (
                        <p>This item did not sell</p>
                    )}
                </div>
        </div>
    </Link>
  )
}
