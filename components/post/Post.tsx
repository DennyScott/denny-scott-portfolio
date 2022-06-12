import Link from "next/link";

interface Props {
  title: string;
  date: string;
  tags: string[];
  description: string;
  url: string;
}

export function Post(props: Props) {
  const { date, title, tags, description, url } = props;

  const formattedDate = new Intl.DateTimeFormat().format(new Date(date));
  const slug = `blog/${url}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 text-sm">
        <span className="uppercase font-semibold">{formattedDate}</span>
        <span className="uppercase text-orange-400 flex gap-1">
          {tags ? tags.map((tag) => <span key={tag}>{tag}</span>) : null}
        </span>
      </div>
      <Link href={slug} passHref={true}>
        <div className="text-3xl cursor-pointer mb-2 font-semibold">
          {title}
        </div>
      </Link>
      <div className="font-extralight mb-4">{description}</div>
      <div>
        <a className="text-cyan-500" href={slug}>
          Read
        </a>
      </div>
    </div>
  );
}
