grammar Activity
import "../common/common";

entry Activity:
    NEWLINE*
    ('activity-beta')
    NEWLINE*
    (
        NEWLINE
        | TitleAndAccessibilities
        | statements+=Statement
    )*
;

Statement:
    Start
    | Arrow
    | ActivityState
    | End
;

fragment Label:
    '[' label=STRING ']'
;

Start:
    'start'
    (
        info=STRING (Label)?
    )
;

Arrow:
    'arrow'
    (
        info=STRING (Label)?
    )* EOL
;

ActivityState:
    'activity'
    (
        info=STRING (Label)?
    )* EOL
;

End:
    'end'
    (
        info=STRING (Label)?
    )
    EOL
;
    



