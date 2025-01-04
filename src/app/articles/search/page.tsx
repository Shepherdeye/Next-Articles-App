interface SearchArticlePageProps {
    searchParams: { searchtext: string }
}

const SearchArticlePage = ({ searchParams: { searchtext } }: SearchArticlePageProps) => {

    return (
        <div className="fix-height">
            <h3> this is the searchValue : {searchtext}</h3>
        </div>
    )
}

export default SearchArticlePage