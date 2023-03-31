import Heading from 'components/Heading';
import List from 'features/Layout/List';

export default function Layout() {
    return (
        <section className="border border-[#8785A2] w-full min-w-[300px] max-w-[500px] min-h-[300px] lg:h-full lg:min-h-full rounded-md p-5">
            <Heading text="Layout" />
            <List />
        </section>
    );
}
