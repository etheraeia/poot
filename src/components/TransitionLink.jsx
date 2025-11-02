import { Link } from "react-router-dom";
import { usePageTransition } from "./TransitionProvider";

export function TransitionLink({ to, children, className, style }) {
    const { transitionTo } = usePageTransition();
    return (
        <Link
            to={to}
            onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                transitionTo(to);
            }}
            className={className}
            style={style}
        >
            {children}
        </Link>
    );
}