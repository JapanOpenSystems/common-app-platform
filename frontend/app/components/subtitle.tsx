
export const Subtitle = ({ subTitle }: { subTitle: string }) => {
  return (
    <h2 className="items-center m-4">
        <span className="text-xl font-bold text-gray-900">
          {subTitle}
        </span>
    </h2>
  );
}

Subtitle.displayName = "Subtitle";