
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/search/_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  searchParams: { q?: string, f?: string, pf?: string };
}
export default function Search({ searchParams }: Props) {
  return (
    <main>
      <div>
        <div>
          <div>
            <BackButton/>
          </div>
          <div>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab/>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  )
}
