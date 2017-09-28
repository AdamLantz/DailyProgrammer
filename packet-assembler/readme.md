# Description

When a message is transmitted over the internet, it is split into multiple packets, each packet is transferred individually, and the packets are reassembled into the original message by the receiver. Because the internet exists in the real world, and because the real world can be messy, packets do not always arrive in the order in which they are sent. For today's challenge, your program must collect packets from stdin, assemble them in the correct order, and print the completed messages to stdout.

The point of reading from stdin is to simulate incoming packets. For the purposes of this challenge, assume there is a potentially unlimited number of packets. Your program should not depend on knowing how many packets there are in total. Simply sorting the input in its entirety would technically work, but defeats the purpose of this exercise.

## Input Description

Each line of input represents a single packet. Each line will be formatted as X Y Z some_text, where X Y and Z are positive integer and some_text is an arbitrary string. X represents the message ID (ie which message this packet is a part of). Y represents the packet ID (ie the index of this packet in the message) (packets are zero-indexed, so the first packet in a message will have Y=0, the last packet in a message will have Y=Z-1). Z represents the total number of packets in the message.

It is guaranteed that there will be no duplicate packets or message IDs.

### Example Input
```
6220    1   10  Because he's the hero Gotham deserves,
6220    9   10
5181    5   7   in time, like tears in rain. Time to die.
6220    3   10  So we'll hunt him.
6220    5   10  Because he's not a hero.
5181    6   7
5181    2   7   shoulder of Orion. I watched C-beams
5181    4   7   Gate. All those moments will be lost
6220    6   10  He's a silent guardian.
5181    3   7   glitter in the dark near the Tannhäuser
6220    7   10  A watchful protector.
5181    1   7   believe. Attack ships on fire off the
6220    0   10  We have to chase him.
5181    0   7   I've seen things you people wouldn't
6220    4   10  Because he can take it.
6220    2   10  but not the one it needs right now.
6220    8   10  A Dark Knight.
```
## Output Description

Output each completed message, one line per packet. Messages should be outputted in the order in which they are completed.

### Example Output
```
5181    0   7   I've seen things you people wouldn't
5181    1   7   believe. Attack ships on fire off the
5181    2   7   shoulder of Orion. I watched C-beams
5181    3   7   glitter in the dark near the Tannhäuser
5181    4   7   Gate. All those moments will be lost
5181    5   7   in time, like tears in rain. Time to die.
5181    6   7
6220    0   10  We have to chase him.
6220    1   10  Because he's the hero Gotham deserves,
6220    2   10  but not the one it needs right now.
6220    3   10  So we'll hunt him.
6220    4   10  Because he can take it.
6220    5   10  Because he's not a hero.
6220    6   10  He's a silent guardian.
6220    7   10  A watchful protector.
6220    8   10  A Dark Knight.
6220    9   10
```

# Dependencies
My implementation of this challenge relies on Node.js for file system and line reading

# Challenge Source
https://www.reddit.com/r/dailyprogrammer/comments/72ivih/20170926_challenge_333_easy_packet_assembler/
