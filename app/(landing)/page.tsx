import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { paths } from '@/lib/paths';

const LandingPage = () => {
	return (
		<div>
			Landing Page (Unprotected)
			<div>
				<Link href={paths.signIn}>
					<Button>Login</Button>
				</Link>
				<Link href={paths.signUp}>
					<Button>Register</Button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
