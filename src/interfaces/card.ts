export interface ICard {
    title: string;
    value: string;
    backgroundColor?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}