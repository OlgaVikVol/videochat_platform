import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


interface PermissionCardProps {
	title: string;
	iconUrl?: string;
}

const Alert = ({ title, iconUrl }: PermissionCardProps) => {
	return (
		<section className='flex-center h-screen w-full'>
			<Card>
				<CardContent>
					<div className="flex flex-col gap-9 pt-4">
						<div className="flex flex-col gap-3.5">
							{iconUrl && (
								<div className="flex-center">
									<Image src={iconUrl} width={72} height={72} alt="icon" />
								</div>
							)}
							<p className="text-center text-xl font-semibold text-white">
								{title}
							</p>
						</div>

						<Button asChild className="bg-blue-1">
							<Link href="/">Back To Home</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	)
}

export default Alert;

